# Comandos para analizar cambios en GIT

    git init: inicializar el repositorio
    git add nombre_de_archivo.extensión: agregar el archivo al repositorio
    git commit -m “Mensaje”: Agregamos los cambios para el repositorio
    git add: Agregar los cambios de la carpeta en la que nos encontramos agregar todo
    git status: visualizar cambios
    git log nombre_de_archivos.extensión: histórico de cambios con detalles
    git push: envía a otro repositorio remoto lo que estamos haciendo
    git pull: traer repositorio remoto
    ls: listado de carpetas en donde me encuentro. Es decir, como emplear dir en windows.
    pwd: ubicación actual
    mkdir: make directory nueva carpeta
    touch archivo.extensión: crear archivo vacío
    cat archivo.extensión: muestra el contenido del archivo
    history: historial de comandos utilizados durante esa sesión
    rm archivo.extensión: Eliminación de archivo
    comando --help: ayuda sobre el comando
    git checkout: traer cambios realizados
    git rm --cached archivo.extensión: se utiliza para devolver el archivo que se tiene en ram. Cuando escribimos git add, lo devuelve a estado natural mientras está en staging.
    git config --list: muestra la lista de configuración de git
    git config --list --show-origin: rutas de acceso a la configuración de git
    git log archivo.extensión: muestra la historia del archivo

    git remote -v: Verificar que la URL se haya guardado correctamente
    git remote set-url origin url_del_repositorio: Actualizar la URL a otro repositorio remoto

## Link of useful content
https://morioh.com/p/ce272cecc33b
Solution of n queens problem = https://baffinlee.com/leetcode-javascript/problem/n-queens.html

## Solucion al error al hacer merge 

git pull origin master --allow-unrelated-histories

https://www.educative.io/answers/the-fatal-refusing-to-merge-unrelated-histories-git-error





