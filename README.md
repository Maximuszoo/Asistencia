# Sistema de Asistencia - Psicólogos Sociales

Aplicación web estática para conectar personas que necesitan asistencia con psicólogos sociales disponibles en diferentes zonas.

## 🚀 Características

- **Botón de Asistencia de Emergencia**: Solicita ayuda inmediata y muestra profesionales cercanos
- **Mapa Interactivo**: Visualiza la ubicación de todos los profesionales disponibles
- **Lista de Profesionales**: 10 psicólogos sociales con datos completos
- **Contacto WhatsApp**: Enlace directo para contactar a cada profesional
- **Geolocalización**: Encuentra automáticamente el profesional más cercano
- **Filtros**: Busca por zona o nombre del profesional
- **Diseño Responsive**: Funciona en móviles, tablets y escritorio

## 📋 Profesionales Incluidos

La aplicación incluye 10 psicólogos sociales distribuidos en 5 zonas:
- **Zona Norte**: 2 profesionales
- **Zona Sur**: 2 profesionales
- **Zona Centro**: 2 profesionales
- **Zona Este**: 2 profesionales
- **Zona Oeste**: 2 profesionales

Cada profesional tiene:
- Nombre y especialidad
- Dirección completa
- Ubicación en Google Maps
- Contacto de WhatsApp
- Estado de disponibilidad

## 🔧 Configuración

### API de Google Maps

Para que el mapa funcione, necesitas configurar una API Key de Google Maps:

1. Ve a [Google Cloud Console](https://console.cloud.google.com/)
2. Crea un proyecto nuevo o selecciona uno existente
3. Habilita la API de Google Maps JavaScript
4. Crea una API Key
5. Reemplaza `TU_API_KEY_AQUI` en `index.html` línea 8 con tu API Key:

```html
<script src="https://maps.googleapis.com/maps/api/js?key=TU_CLAVE_API_REAL"></script>
```

## 🌐 Cómo usar

1. Abre `index.html` en tu navegador
2. Presiona el botón "SOLICITAR ASISTENCIA" para activar la geolocalización
3. Explora el mapa para ver todos los profesionales
4. Usa los filtros para buscar por zona o nombre
5. Haz clic en "WhatsApp" para contactar directamente
6. Haz clic en "Ubicar" para centrar el mapa en un profesional específico

## 📱 Funcionalidades

### Botón de Asistencia
- Solicita permiso de geolocalización
- Muestra tu ubicación en el mapa (marcador azul)
- Calcula y muestra el profesional más cercano
- Los profesionales aparecen con marcadores rojos

### Mapa Interactivo
- Marcadores para cada profesional
- Info windows con datos del profesional
- Botones para contactar por WhatsApp
- Zoom y navegación completa

### Lista de Profesionales
- Tarjetas con información detallada
- Estado de disponibilidad
- Tres acciones rápidas: WhatsApp, Ver en Mapa, Ubicar

### Filtros
- Por zona (Norte, Sur, Centro, Este, Oeste)
- Por nombre o especialidad (búsqueda en tiempo real)
- Actualización automática del mapa

## 🎨 Tecnologías Utilizadas

- HTML5
- CSS3 (Grid, Flexbox, Gradients)
- JavaScript (Vanilla)
- Google Maps JavaScript API
- Diseño responsive

## 📝 Notas

- Los datos de los profesionales son ficticios para demostración
- Las ubicaciones están en el área metropolitana de Buenos Aires
- Los números de WhatsApp son de ejemplo
- La aplicación es completamente estática (sin backend)

## 🔒 Privacidad

La aplicación solicita acceso a la geolocalización solo cuando presionas el botón de asistencia. Esta información no se almacena ni se envía a ningún servidor.
# Asistencia
