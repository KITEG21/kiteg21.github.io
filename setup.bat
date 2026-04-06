@echo off
REM Quick setup script for the portfolio (Windows)

echo.
echo 🚀 Portfolio Setup Script
echo ========================
echo.

REM Check Node.js version
for /f "tokens=*" %%i in ('node -v') do set NODE_VERSION=%%i
echo ✓ Node.js version: %NODE_VERSION%

REM Install dependencies
echo.
echo 📦 Installing dependencies...
call npm install

if %errorlevel% neq 0 (
    echo ✗ Failed to install dependencies
    exit /b 1
)

echo ✓ Dependencies installed successfully

REM Create necessary directories
echo.
echo 📁 Ensuring directory structure...
if not exist "src\styles" mkdir src\styles
if not exist "src\components" mkdir src\components
if not exist "src\layouts" mkdir src\layouts
if not exist "src\pages" mkdir src\pages
if not exist "public" mkdir public
echo ✓ Directory structure ready

echo.
echo ✨ Setup complete!
echo.
echo Next steps:
echo   1. Update personal info in src\components\
echo   2. Customize colors in tailwind.config.cjs
echo   3. Run: npm run dev
echo   4. Open: http://localhost:3000
echo.
