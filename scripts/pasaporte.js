const map = L.map('map', {
    zoomControl: false,
    dragging: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    touchZoom: false,
    minZoom: 2,
    maxZoom: 2
}).setView([20, 0], 2);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

const countries = {
    "Mexico": { latlng: [23.6345, -102.5528], color: "blue" },
    "Argentina": { latlng: [-38.4161, -63.6167], color: "green" },
    "Spain": { latlng: [40.4637, -3.7492], color: "red" },
    "France": { latlng: [46.6035, 1.8883], color: "purple" },
    "Japan": { latlng: [36.2048, 138.2529], color: "orange" }
};

let visitedCountries = JSON.parse(localStorage.getItem('visitedCountries')) || [];

async function loadCountries() {
    try {
        const response = await fetch('https://restcountries.com/v3.1/all');
        const data = await response.json();
        
        data.sort((a, b) => a.name.common.localeCompare(b.name.common));

        const countrySelect = document.getElementById('country');
        countrySelect.innerHTML = ''; 
        
        data.forEach(country => {
            const option = document.createElement('option');
            option.value = country.name.common;
            option.textContent = country.name.common;
            countrySelect.appendChild(option);
            
            if (!countries[country.name.common] && country.latlng) {
                let color;
                if (country.region === 'Europe') color = '#cc0000';
                else if (country.region === 'Asia') color = '#ff9900';
                else color = '#3c78d8';
                
                countries[country.name.common] = {
                    latlng: country.latlng.reverse(), 
                    color: color
                };
            }
        });
    } catch (error) {
        console.error('Error al cargar países:', error);
        loadBasicCountries();
    }
}

function loadBasicCountries() {
    const basicCountries = {
        "Germany": { latlng: [51.1657, 10.4515], color: "#cc0000" },
        "Italy": { latlng: [41.8719, 12.5674], color: "#cc0000" },
        "United States": { latlng: [37.0902, -95.7129], color: "#3c78d8" },
        "Canada": { latlng: [56.1304, -106.3468], color: "#3c78d8" },
        "Brazil": { latlng: [-14.2350, -51.9253], color: "#3c78d8" }
    };
    
    Object.assign(countries, basicCountries);
    
    const countrySelect = document.getElementById('country');
    Object.keys(basicCountries).forEach(country => {
        const option = document.createElement('option');
        option.value = country;
        option.textContent = country;
        countrySelect.appendChild(option);
    });
}

function updateMap() {
    map.eachLayer(layer => {
        if (layer instanceof L.CircleMarker) {
            map.removeLayer(layer);
        }
    });

    visitedCountries.forEach(country => {
        const countryData = countries[country.name];
        if (countryData) {
            L.circleMarker(countryData.latlng, {
                radius: 10,
                fillColor: countryData.color,
                color: "#000",
                weight: 1,
                opacity: 1,
                fillOpacity: 0.8
            }).addTo(map).bindPopup(`<b>${country.name}</b><br>${country.date}`);
        }
    });
}

document.getElementById('save-btn').addEventListener('click', () => {
    const country = document.getElementById('country').value;
    const date = document.getElementById('date').value;
    const description = document.getElementById('description').value;
    const photosInput = document.getElementById('photos');
    
    const photos = [];
    if (photosInput.files.length > 0) {
        for (let i = 0; i < photosInput.files.length; i++) {
            photos.push(URL.createObjectURL(photosInput.files[i]));
        }
    }

    const newCountry = {
        name: country,
        date: date,
        description: description,
        photos: photos
    };

    visitedCountries.push(newCountry);
    localStorage.setItem('visitedCountries', JSON.stringify(visitedCountries));
    
    updateMap();
    renderCountriesList();
    
    // Limpiar el formulario después de guardar
    document.getElementById('description').value = '';
    document.getElementById('photos').value = '';
    document.getElementById('photos-preview').innerHTML = '';
    
    alert(`¡${country} agregado a tu pasaporte!`);
});

document.getElementById('photos').addEventListener('change', (e) => {
    const preview = document.getElementById('photos-preview');
    preview.innerHTML = '';
    if (e.target.files.length > 0) {
        for (let i = 0; i < e.target.files.length; i++) {
            const img = document.createElement('img');
            img.src = URL.createObjectURL(e.target.files[i]);
            img.classList.add('w-24', 'h-24', 'object-cover', 'rounded');
            preview.appendChild(img);
        }
    }
});

function createCountryCard(country) {
    const card = document.createElement('div');
    card.className = 'country-card';
    
    let photosHTML = '';
    if (country.photos && country.photos.length > 0) {
        photosHTML = `
            <div class="country-photos">
                ${country.photos.map(photo => 
                    `<img src="${photo}" alt="Foto de ${country.name}" class="country-photo">`
                ).join('')}
            </div>
        `;
    }
    
    card.innerHTML = `
        <div class="country-name">${country.name}</div>
        <div class="country-date">
            <i class="fas fa-calendar-alt mr-2"></i>
            ${new Date(country.date).toLocaleDateString('es-ES', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
            })}
        </div>
        <div class="country-description">
            <i class="fas fa-comment-alt mr-2"></i>
            ${country.description || 'No hay descripción disponible'}
        </div>
        ${photosHTML}
        <button class="delete-btn" data-country="${encodeURIComponent(country.name)}" data-date="${country.date}">
            <i class="fas fa-trash-alt mr-2"></i>
            Eliminar
        </button>
    `;
    
    return card;
}

function renderCountriesList() {
    const container = document.getElementById('visited-countries');
    container.innerHTML = '';
    
    if (visitedCountries.length === 0) {
        container.innerHTML = '<p class="text-gray-600 text-center py-4">Aún no has agregado países.</p>';
        return;
    }

    visitedCountries.forEach(country => {
        const card = createCountryCard(country);
        container.appendChild(card);
    });

    // Agregar event listeners a los botones de eliminar
    document.querySelectorAll('.delete-btn').forEach(button => {
        button.addEventListener('click', function() {
            const countryName = decodeURIComponent(this.getAttribute('data-country'));
            const date = this.getAttribute('data-date');
            
            visitedCountries = visitedCountries.filter(c => 
                !(c.name === countryName && c.date === date)
            );
            
            localStorage.setItem('visitedCountries', JSON.stringify(visitedCountries));
            updateMap();
            renderCountriesList();
        });
    });
}

function generatePDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a5'
    });

    const pageWidth = doc.internal.pageSize.getWidth();
    const margin = 15; 
    const contentWidth = pageWidth - (margin * 2);
    let yPos = margin;

    const titleStyle = { fontSize: 20, fontStyle: 'bold', textColor: [0, 51, 102] };
    const subtitleStyle = { fontSize: 14, textColor: [100, 100, 100] };
    const countryStyle = { fontSize: 16, fontStyle: 'bold', textColor: [0, 51, 102] };
    const labelStyle = { fontSize: 12, fontStyle: 'bold', textColor: [0, 0, 0] };
    const textStyle = { fontSize: 11, textColor: [0, 0, 0] };

    doc.setFontSize(titleStyle.fontSize);
    doc.setTextColor(...titleStyle.textColor);
    doc.text('Mi Pasaporte de Viajes', pageWidth / 2, 60, { align: 'center' });
    
    doc.setFontSize(subtitleStyle.fontSize);
    doc.setTextColor(...subtitleStyle.textColor);
    doc.text('Un registro de mis aventuras alrededor del mundo', pageWidth / 2, 70, { align: 'center' });
    
    const logo = new Image();
    logo.src = '../recursos/vuelayaa.png';
    doc.addImage(logo, 'PNG', (pageWidth - 40) / 2, 90, 40, 20);

    if (visitedCountries.length > 0) {
        doc.addPage();
        
        visitedCountries.forEach((country, index) => {
            if (index > 0) {
                doc.addPage();
            }
            
            yPos = margin;
            
            doc.setFontSize(countryStyle.fontSize);
            doc.setTextColor(...countryStyle.textColor);
            doc.text(country.name, pageWidth / 2, yPos, { align: 'center' });
            yPos += 10;

            doc.setFontSize(labelStyle.fontSize);
            doc.setTextColor(...labelStyle.textColor);
            doc.text('País:', margin, yPos);
            doc.setFontSize(textStyle.fontSize);
            doc.setTextColor(...textStyle.textColor);
            doc.text(country.name, margin + 20, yPos);
            yPos += 8;

            doc.setFontSize(labelStyle.fontSize);
            doc.setTextColor(...labelStyle.textColor);
            doc.text('Fecha de visita:', margin, yPos);
            doc.setFontSize(textStyle.fontSize);
            doc.setTextColor(...textStyle.textColor);
            doc.text(new Date(country.date).toLocaleDateString(), margin + 40, yPos);
            yPos += 8;

            doc.setFontSize(labelStyle.fontSize);
            doc.setTextColor(...labelStyle.textColor);
            doc.text('Describe tu viaje:', margin, yPos);
            yPos += 8;
            
            doc.setFontSize(textStyle.fontSize);
            doc.setTextColor(...textStyle.textColor);
            const descriptionLines = doc.splitTextToSize(country.description || 'Sin descripción', contentWidth);
            doc.text(descriptionLines, margin, yPos);
            yPos += descriptionLines.length * 5 + 10;

            if (country.photos && country.photos.length > 0) {
                try {
                    const img = new Image();
                    img.src = country.photos[0];
                    
                    const maxWidth = contentWidth;
                    const maxHeight = 60;
                    let width = img.width;
                    let height = img.height;
                    
                    if (width > maxWidth) {
                        const ratio = maxWidth / width;
                        width = maxWidth;
                        height = height * ratio;
                    }
                    
                    if (height > maxHeight) {
                        const ratio = maxHeight / height;
                        height = maxHeight;
                        width = width * ratio;
                    }
                    
                    const xPos = (pageWidth - width) / 2;
                    doc.addImage(img, 'JPEG', xPos, yPos, width, height);
                    yPos += height + 10;
                } catch (e) {
                    console.error("Error al agregar imagen:", e);
                }
            }
            doc.setFontSize(8);
            doc.setTextColor(150, 150, 150);
            doc.text(`Página ${index + 2} - Generado por VuelaYa!`, pageWidth / 2, doc.internal.pageSize.getHeight() - 10, { align: 'center' });
        });
    }

    doc.save('Mi_Pasaporte_VuelaYa.pdf');
}

document.getElementById('download-pdf').addEventListener('click', generatePDF);

function updatePDF() {
    console.log("Base de datos de países actualizada - PDF listo para regenerarse");
}
document.getElementById('save-btn').addEventListener('click', () => {
    updatePDF();
});

loadCountries();
updateMap();
renderCountriesList();