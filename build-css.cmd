@echo off
rem Gera assets\css\tailwind.css a partir das classes usadas no index.html e no main.js.
rem Rode sempre que mudar classes, antes do commit. Uso:  .\build-css.cmd
rem Para recompilar sozinho enquanto edita:  .\build-css.cmd --watch
setlocal
set "TAILWIND=%USERPROFILE%\tools\tailwindcss-4.3.5\tailwindcss-windows-x64.exe"
if not exist "%TAILWIND%" (
    echo Compilador nao encontrado em "%TAILWIND%".
    echo Baixe tailwindcss-windows-x64.exe versao 4.3.5 em
    echo https://github.com/tailwindlabs/tailwindcss/releases/tag/v4.3.5
    echo e salve nesse caminho.
    exit /b 1
)
cd /d "%~dp0"
"%TAILWIND%" -i assets\css\tailwind.input.css -o assets\css\tailwind.css --minify %*
