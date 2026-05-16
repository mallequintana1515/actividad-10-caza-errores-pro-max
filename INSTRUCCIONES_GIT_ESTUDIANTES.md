# Instrucciones básicas para subir el proyecto a Git

Estas instrucciones son opcionales si el docente solicita entrega por repositorio.

## 1. Inicializar repositorio

Abre la terminal dentro de la carpeta del proyecto corregido y ejecuta:

```bash
git init
```

## 2. Revisar estado

```bash
git status
```

## 3. Agregar archivos

```bash
git add .
```

## 4. Crear commit

```bash
git commit -m "Corregir actividad Caza errores"
```

## 5. Conectar con GitHub

Crea un repositorio en GitHub y copia la URL. Luego ejecuta:

```bash
git remote add origin URL_DEL_REPOSITORIO
```

## 6. Subir cambios

```bash
git branch -M main
git push -u origin main
```

## Recomendación

No subas carpetas de soluciones del docente. Solo sube tu proyecto corregido y tus evidencias.
