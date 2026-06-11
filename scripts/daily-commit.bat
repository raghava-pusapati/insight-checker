@echo off
REM Daily Commit Automation Script for Windows
REM This script helps you make regular commits with meaningful messages

echo =============================
echo   Daily Commit Helper
echo =============================
echo.

REM Show git status
echo Current Git Status:
git status --short
echo.

REM Ask user for commit type
echo Select commit type:
echo 1) feat     - New feature
echo 2) fix      - Bug fix
echo 3) docs     - Documentation
echo 4) style    - Formatting/styling
echo 5) refactor - Code refactoring
echo 6) perf     - Performance improvement
echo 7) test     - Adding tests
echo 8) chore    - Maintenance
echo.

set /p choice="Enter choice (1-8): "

if "%choice%"=="1" set TYPE=feat
if "%choice%"=="2" set TYPE=fix
if "%choice%"=="3" set TYPE=docs
if "%choice%"=="4" set TYPE=style
if "%choice%"=="5" set TYPE=refactor
if "%choice%"=="6" set TYPE=perf
if "%choice%"=="7" set TYPE=test
if "%choice%"=="8" set TYPE=chore
if not defined TYPE set TYPE=chore

echo.
set /p MESSAGE="Enter commit message: "

if "%MESSAGE%"=="" (
    echo Error: Commit message cannot be empty
    pause
    exit /b 1
)

REM Full commit message
set FULL_MESSAGE=%TYPE%: %MESSAGE%

echo.
echo Commit message: %FULL_MESSAGE%
echo.

set /p CONFIRM="Proceed with commit? (y/n): "

if /i "%CONFIRM%"=="y" (
    git add .
    git commit -m "%FULL_MESSAGE%"
    echo.
    echo Committed successfully!
    echo.
    
    set /p PUSH="Push to remote? (y/n): "
    
    if /i "!PUSH!"=="y" (
        git push
        echo.
        echo Pushed to remote successfully!
    )
) else (
    echo Commit cancelled
)

pause
