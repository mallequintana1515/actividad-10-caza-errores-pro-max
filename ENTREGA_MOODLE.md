# Actividad 10 - Caza errores Bar Pro Max

## Enlace del repositorio

https://github.com/mallequintana1515/actividad-10-caza-errores-pro-max.git

## Lista priorizada de bugs encontrados

1. Alta prioridad: la navegación a la sección de reservas apuntaba a `#reservass`, pero la sección real era `#reservas`.
2. Alta prioridad: la navegación a la carta no funcionaba correctamente porque el enlace usaba `#menu` y la sección tenía el id `menú`.
3. Alta prioridad: el contenido principal del hero no recibía estilos porque el HTML tenía la clase `hero__contnet` y el CSS esperaba `hero__content`.
4. Alta prioridad: el diseño responsive no se activaba porque el media query decía `max-widh` en lugar de `max-width`.
5. Media prioridad: las tarjetas de la carta no recibían su estilo porque el CSS tenía `.drink-cardd` y el HTML usaba `.drink-card`.
6. Media prioridad: el hover de la navegación usaba la variable inexistente `--accent-gold`.
7. Media prioridad: el formulario no validaba correctamente el correo ni el máximo de personas.
8. Media prioridad: el botón del menú móvil no actualizaba `aria-expanded` y podía quedar abierto después de tocar un enlace.
9. Baja prioridad: varios textos se veían con caracteres dañados por problemas de codificación.
10. Baja prioridad: faltaban atributos `type="button"` en botones que no envían formularios.

## Correcciones aplicadas

- Se corrigieron los ids y enlaces internos de `Inicio`, `Carta`, `Experiencia` y `Reservas`.
- Se corrigieron clases mal escritas en el hero y en las tarjetas de la carta.
- Se reparó el media query para que el sitio funcione en pantallas pequeñas.
- Se reemplazó la variable CSS inexistente por `--gold`.
- Se mejoró el menú móvil con `aria-expanded`, cambio de etiqueta accesible y cierre automático al seleccionar un enlace.
- Se mejoró el formulario de reservas con validación de campos obligatorios, correo y rango de personas.
- Se corrigieron textos con caracteres dañados y se normalizó el contenido en español.
- Se agregaron asociaciones `label for` e `id` para mejorar accesibilidad.

## Comparación antes y después

Antes de las correcciones, algunos enlaces del menú no llevaban a la sección correcta, el hero perdía estilos por una clase mal escrita, las tarjetas de la carta no tenían el diseño esperado y la versión móvil no se adaptaba porque el media query estaba mal escrito.

Después de las correcciones, la navegación interna funciona, la carta se filtra correctamente, el formulario muestra mensajes claros, las tarjetas reciben sus estilos y la vista móvil se organiza en una sola columna.

## Evidencias sugeridas para capturas

- Antes: capturar el menú con el enlace de reservas fallando o la sección de carta sin saltar correctamente.
- Antes: capturar la vista móvil donde el diseño no se adapta por el error en `max-widh`.
- Después: capturar la página principal con el hero corregido.
- Después: capturar la carta filtrando por "Cocteles" o "Sin alcohol".
- Después: capturar el formulario mostrando una reserva confirmada.

## Justificación de los ajustes

Los ajustes se realizaron para corregir errores funcionales que afectaban la navegación, la presentación visual y la interacción del usuario. También se mejoró la accesibilidad básica del menú y del formulario para que el sitio sea más claro, usable y consistente en computador y celular.

## Plan de mejora para la siguiente versión

1. Agregar más productos a la carta y completar la categoría de tapas.
2. Bloquear fechas pasadas en el formulario de reserva.
3. Mostrar una confirmación más detallada con fecha, número de personas y correo.
4. Agregar pruebas manuales documentadas para navegación, filtros, formulario y responsive.
5. Optimizar imágenes para mejorar el tiempo de carga.
6. Añadir una sección de testimonios o reseñas de clientes.
7. Crear una página o modal con detalles de cada coctel.
