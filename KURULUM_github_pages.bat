@echo off
REM EQUILYZE — GitHub Pages Yayın Kurulumu
REM =========================================
REM Bu script, Equilyze vitrinini GitHub Pages ile yayına hazırlar.
REM Ön koşul: Git kurulu olmalı (https://git-scm.com)
REM
REM ADIMLAR:
REM 1. GitHub'da yeni bir repo oluşturun (ör: "equilyze")
REM 2. Bu .bat dosyasını Equilyze klasörüne koyun
REM 3. Çift tıklayın ve ekrandaki talimatları izleyin
REM =========================================

echo.
echo === EQUILYZE — GitHub Pages Yayın Kurulumu ===
echo.
echo Bu script, projeyi GitHub'a yükler ve GitHub Pages'i etkinleştirir.
echo.
echo Devam etmek için ENTER'a basın...
pause >nul

REM Git init
echo [1/5] Git deposu başlatılıyor...
git init
if %errorlevel% neq 0 (
    echo HATA: Git bulunamadı. https://git-scm.com adresinden yükleyin.
    pause
    exit /b 1
)

REM Add all files
echo [2/5] Dosyalar ekleniyor...
git add Equilyze/index.html Equilyze/styles.css Equilyze/script.js GATES.md DECISIONS.md SCORES.md

REM Commit
echo [3/5] Commit yapılıyor...
git commit -m "FAZ 0 — Dürüst vitrin + bekleme listesi"

REM Ask for remote URL
echo.
echo [4/5] GitHub repo URL'sini girin:
echo    (GitHub'da oluşturduğunuz repo'nun URL'si, ör: https://github.com/kullanici/equilyze.git)
set /p REPO_URL="URL: "

git remote add origin %REPO_URL%
git branch -M main
git push -u origin main

echo.
echo [5/5] GitHub Pages ayarları:
echo.
echo 1. GitHub'da reposu açın: https://github.com/kullanici/equilyze
echo 2. Settings ^> Pages ^> Source: "Deploy from branch"
echo 3. Branch: "main", directory: "/" (root)
echo 4. Save'e tıklayın
echo.
echo 5. Birkaç dakika sonra siteniz yayında olacak:
echo    https://kullanici.github.io/equilyze/
echo.
echo NOT: Formspree için form action URL'sini index.html'de güncelleyin:
echo    "https://formspree.io/f/YOUR_FORM_ID" kısmını kendi ID'nizle değiştirin
echo    (https://formspree.io adresinden ücretsiz hesap açın)
echo.
echo === KURULUM TAMAMLANDI ===
pause
