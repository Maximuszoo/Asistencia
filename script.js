// Datos de los profesionales (inventados)
const professionals = [
    {
        id: 1,
        nombre: "Dra. María González",
        especialidad: "Psicología Social Comunitaria",
        zona: "norte",
        direccion: "Av. Cabildo 2850, CABA",
        lat: -34.5589,
        lng: -58.4558,
        telefono: "+5491123456789",
        disponible: true
    },
    {
        id: 2,
        nombre: "Lic. Carlos Rodríguez",
        especialidad: "Intervención en Crisis",
        zona: "sur",
        direccion: "Av. Hipólito Yrigoyen 9500, Lomas de Zamora",
        lat: -34.7606,
        lng: -58.4026,
        telefono: "+5491198765432",
        disponible: true
    },
    {
        id: 3,
        nombre: "Lic. Ana Martínez",
        especialidad: "Psicología Grupal",
        zona: "centro",
        direccion: "Av. Corrientes 3247, CABA",
        lat: -34.6037,
        lng: -58.4114,
        telefono: "+5491145678901",
        disponible: true
    },
    {
        id: 4,
        nombre: "Dr. Jorge Fernández",
        especialidad: "Psicología Organizacional",
        zona: "este",
        direccion: "Av. San Martín 3349, San Martín",
        lat: -34.5742,
        lng: -58.5372,
        telefono: "+5491156789012",
        disponible: true
    },
    {
        id: 5,
        nombre: "Lic. Laura Sánchez",
        especialidad: "Asistencia Comunitaria",
        zona: "oeste",
        direccion: "Av. Rivadavia 18500, Morón",
        lat: -34.6534,
        lng: -58.6196,
        telefono: "+5491167890123",
        disponible: true
    },
    {
        id: 6,
        nombre: "Lic. Miguel Torres",
        especialidad: "Psicología de Emergencias",
        zona: "norte",
        direccion: "Av. del Libertador 5600, CABA",
        lat: -34.5505,
        lng: -58.4482,
        telefono: "+5491178901234",
        disponible: true
    },
    {
        id: 7,
        nombre: "Dra. Patricia López",
        especialidad: "Salud Mental Comunitaria",
        zona: "sur",
        direccion: "Camino Gral. Belgrano 3965, Quilmes",
        lat: -34.7286,
        lng: -58.2618,
        telefono: "+5491189012345",
        disponible: true
    },
    {
        id: 8,
        nombre: "Lic. Roberto Díaz",
        especialidad: "Psicología Social",
        zona: "centro",
        direccion: "Av. Callao 850, CABA",
        lat: -34.5976,
        lng: -58.3926,
        telefono: "+5491190123456",
        disponible: true
    },
    {
        id: 9,
        nombre: "Lic. Silvia Ruiz",
        especialidad: "Intervención Social",
        zona: "este",
        direccion: "Av. Eva Perón 5856, San Miguel",
        lat: -34.5412,
        lng: -58.7089,
        telefono: "+5491101234567",
        disponible: true
    },
    {
        id: 10,
        nombre: "Dr. Eduardo Castro",
        especialidad: "Psicología Comunitaria",
        zona: "oeste",
        direccion: "Av. Presidente Perón 2933, Ituzaingó",
        lat: -34.6594,
        lng: -58.6671,
        telefono: "+5491112345678",
        disponible: true
    }
];

// Variables globales
let map;
let markers = [];
let userMarker = null;

// Inicializar el mapa
function initMap() {
    // Centro del mapa en Buenos Aires
    map = L.map('map').setView([-34.6037, -58.3816], 11);
    
    // Agregar capa de OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
        maxZoom: 19
    }).addTo(map);

    // Agregar marcadores para cada profesional
    professionals.forEach(prof => {
        addMarker(prof);
    });
}

// Agregar marcador al mapa
function addMarker(professional) {
    // Crear icono rojo para profesionales
    const redIcon = L.icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
    });

    const marker = L.marker([professional.lat, professional.lng], {
        icon: redIcon,
        title: professional.nombre
    }).addTo(map);

    // Popup con información
    const popupContent = `
        <div style="padding: 10px; min-width: 200px;">
            <h3 style="margin: 0 0 5px 0; font-size: 16px;">${professional.nombre}</h3>
            <p style="margin: 5px 0;"><strong>${professional.especialidad}</strong></p>
            <p style="margin: 5px 0; font-size: 14px;">📍 ${professional.direccion}</p>
            <p style="margin: 10px 0 0 0;">
                <a href="https://wa.me/${professional.telefono.replace(/\+/g, '')}" 
                   target="_blank" 
                   style="color: #25D366; text-decoration: none; font-weight: bold;">
                    💬 Contactar por WhatsApp
                </a>
            </p>
        </div>
    `;

    marker.bindPopup(popupContent);

    markers.push({ marker, professional });
}

// Renderizar lista de profesionales
function renderProfessionals(profsToRender = professionals) {
    const container = document.getElementById('professionalsList');
    container.innerHTML = '';

    profsToRender.forEach(prof => {
        const card = document.createElement('div');
        card.className = 'professional-card';
        card.innerHTML = `
            <div class="professional-header">
                <h3>${prof.nombre}</h3>
                <span class="badge ${prof.disponible ? 'disponible' : 'ocupado'}">
                    ${prof.disponible ? '✓ Disponible' : '✗ No disponible'}
                </span>
            </div>
            <p class="especialidad">${prof.especialidad}</p>
            <p class="direccion">📍 ${prof.direccion}</p>
            <p class="zona">Zona: ${prof.zona.charAt(0).toUpperCase() + prof.zona.slice(1)}</p>
            <div class="professional-actions">
                <a href="https://wa.me/${prof.telefono.replace(/\+/g, '')}" 
                   target="_blank" 
                   class="btn-whatsapp">
                    💬 WhatsApp
                </a>
                <a href="https://www.google.com/maps/search/?api=1&query=${prof.lat},${prof.lng}" 
                   target="_blank" 
                   class="btn-map">
                    📍 Ver en Mapa
                </a>
                <button onclick="centerMapOnProfessional(${prof.id})" class="btn-locate">
                    🎯 Ubicar
                </button>
            </div>
        `;
        container.appendChild(card);
    });
}

// Centrar mapa en un profesional específico
function centerMapOnProfessional(id) {
    const prof = professionals.find(p => p.id === id);
    if (prof) {
        map.setView([prof.lat, prof.lng], 15);
        
        // Abrir el popup del marcador
        const markerData = markers.find(m => m.professional.id === id);
        if (markerData) {
            markerData.marker.openPopup();
        }
        
        // Scroll al mapa
        document.getElementById('map').scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
}

// Filtrar profesionales
function filterProfessionals() {
    const zona = document.getElementById('filterZona').value;
    const searchTerm = document.getElementById('searchName').value.toLowerCase();

    let filtered = professionals;

    if (zona) {
        filtered = filtered.filter(p => p.zona === zona);
    }

    if (searchTerm) {
        filtered = filtered.filter(p => 
            p.nombre.toLowerCase().includes(searchTerm) ||
            p.especialidad.toLowerCase().includes(searchTerm)
        );
    }

    renderProfessionals(filtered);

    // Actualizar marcadores en el mapa
    markers.forEach(({ marker, professional }) => {
        const isVisible = filtered.some(p => p.id === professional.id);
        if (isVisible) {
            map.addLayer(marker);
        } else {
            map.removeLayer(marker);
        }
    });
}

// Obtener ubicación del usuario
function getUserLocation() {
    if (!navigator.geolocation) {
        alert('Tu navegador no soporta geolocalización.');
        return;
    }

    // Opciones para la geolocalización
    const options = {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0
    };

    // Mostrar mensaje de carga
    const loadingMsg = document.createElement('div');
    loadingMsg.id = 'loading-msg';
    loadingMsg.style.cssText = 'position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); background: white; padding: 2rem; border-radius: 10px; box-shadow: 0 5px 20px rgba(0,0,0,0.3); z-index: 9999; text-align: center;';
    loadingMsg.innerHTML = '<p style="margin: 0; font-size: 1.2rem;">📍 Obteniendo tu ubicación...</p>';
    document.body.appendChild(loadingMsg);

    navigator.geolocation.getCurrentPosition(
        (position) => {
            // Remover mensaje de carga
            if (document.getElementById('loading-msg')) {
                document.getElementById('loading-msg').remove();
            }

            const userPos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };

            console.log('Ubicación obtenida:', userPos);

            // Centrar mapa en ubicación del usuario
            map.setView([userPos.lat, userPos.lng], 13);

            // Agregar marcador del usuario
            if (userMarker) {
                map.removeLayer(userMarker);
            }

            // Crear icono azul para el usuario
            const blueIcon = L.icon({
                iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
                shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
                iconSize: [25, 41],
                iconAnchor: [12, 41],
                popupAnchor: [1, -34],
                shadowSize: [41, 41]
            });

            userMarker = L.marker([userPos.lat, userPos.lng], {
                icon: blueIcon,
                title: 'Tu ubicación'
            }).addTo(map);

            userMarker.bindPopup('<strong>📍 Tu ubicación actual</strong>').openPopup();

            // Encontrar profesional más cercano
            const nearest = findNearestProfessional(userPos);
            if (nearest) {
                const distance = calculateDistance(userPos.lat, userPos.lng, nearest.lat, nearest.lng);
                
                // Crear alerta personalizada
                setTimeout(() => {
                    const alertDiv = document.createElement('div');
                    alertDiv.style.cssText = 'position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); background: white; padding: 2rem; border-radius: 10px; box-shadow: 0 5px 20px rgba(0,0,0,0.3); z-index: 9999; max-width: 90%; width: 400px;';
                    alertDiv.innerHTML = `
                        <h3 style="margin: 0 0 1rem 0; color: #667eea;">✅ Profesional más cercano</h3>
                        <p style="margin: 0.5rem 0;"><strong>${nearest.nombre}</strong></p>
                        <p style="margin: 0.5rem 0; color: #666;">📍 ${nearest.direccion}</p>
                        <p style="margin: 0.5rem 0; color: #666;">📏 A ${distance.toFixed(2)} km de distancia</p>
                        <div style="margin-top: 1.5rem; display: flex; gap: 0.5rem;">
                            <a href="https://wa.me/${nearest.telefono.replace(/\+/g, '')}" 
                               target="_blank" 
                               style="flex: 1; background: #25D366; color: white; padding: 0.8rem; text-align: center; border-radius: 5px; text-decoration: none; font-weight: bold;">
                                💬 WhatsApp
                            </a>
                            <button onclick="this.parentElement.parentElement.remove(); centerMapOnProfessional(${nearest.id})" 
                                    style="flex: 1; background: #667eea; color: white; padding: 0.8rem; border: none; border-radius: 5px; cursor: pointer; font-weight: bold;">
                                🗺️ Ver en Mapa
                            </button>
                        </div>
                        <button onclick="this.parentElement.remove()" 
                                style="width: 100%; background: #e0e0e0; color: #333; padding: 0.8rem; border: none; border-radius: 5px; cursor: pointer; margin-top: 0.5rem;">
                            Cerrar
                        </button>
                    `;
                    document.body.appendChild(alertDiv);
                }, 500);
            }
        },
        (error) => {
            // Remover mensaje de carga
            if (document.getElementById('loading-msg')) {
                document.getElementById('loading-msg').remove();
            }

            let errorMsg = 'No se pudo obtener tu ubicación.\n\n';
            
            switch(error.code) {
                case error.PERMISSION_DENIED:
                    errorMsg += '❌ Permiso denegado.\n\n' +
                               'Por favor:\n' +
                               '1. Haz clic en el ícono de candado/información en la barra de direcciones\n' +
                               '2. Permite el acceso a la ubicación\n' +
                               '3. Recarga la página\n\n' +
                               'Nota: Si estás abriendo el archivo localmente (file://), algunos navegadores bloquean la geolocalización por seguridad. Usa un servidor local o abre con "Live Server" en VS Code.';
                    break;
                case error.POSITION_UNAVAILABLE:
                    errorMsg += '📍 Ubicación no disponible. Verifica que tu GPS esté activado.';
                    break;
                case error.TIMEOUT:
                    errorMsg += '⏱️ Tiempo de espera agotado. Intenta nuevamente.';
                    break;
                default:
                    errorMsg += '🔧 Error desconocido. Intenta nuevamente.';
            }
            
            alert(errorMsg);
            console.error('Error de geolocalización:', error);
        },
        options
    );
}

// Calcular distancia entre dos puntos
function calculateDistance(lat1, lng1, lat2, lng2) {
    const R = 6371; // Radio de la Tierra en km
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLng = (lng2 - lng1) * Math.PI / 180;
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
              Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
              Math.sin(dLng / 2) * Math.sin(dLng / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
}

// Encontrar profesional más cercano
function findNearestProfessional(userPos) {
    let nearest = null;
    let minDistance = Infinity;

    professionals.forEach(prof => {
        const distance = calculateDistance(userPos.lat, userPos.lng, prof.lat, prof.lng);
        if (distance < minDistance) {
            minDistance = distance;
            nearest = prof;
        }
    });

    return nearest;
}

// Inicialización cuando el DOM está listo
document.addEventListener('DOMContentLoaded', () => {
    // Inicializar mapa
    initMap();
    
    // Renderizar profesionales
    renderProfessionals();

    // Botón de asistencia
    document.getElementById('btnAsistencia').addEventListener('click', () => {
        const confirmacion = confirm(
            '⚠️ AVISO IMPORTANTE\n\n' +
            '• Tu ubicación será compartida con los psicólogos sociales disponibles\n' +
            '• Se enviará tu información de contacto para que puedan asistirte\n' +
            '• Toda la información es confidencial\n\n' +
            '¿Deseas continuar con la solicitud de asistencia?'
        );

        if (confirmacion) {
            // Redirigir al formulario de asistencia
            window.location.href = 'solicitar-asistencia.html';
        }
    });

    // Filtros
    document.getElementById('filterZona').addEventListener('change', filterProfessionals);
    document.getElementById('searchName').addEventListener('input', filterProfessionals);
});
