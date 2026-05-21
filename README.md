# Ahmet Muhammet Yavuz | Personal Website

Astro ile hazırlanmış modern kişisel web sitesi.

## Yerelde çalıştırma

PowerShell üzerinde `npm` yerine `npm.cmd` kullan:

```powershell
npm.cmd install
npm.cmd run dev
```

Yerel önizleme varsayılan olarak `http://localhost:4321` adresinde açılır.

## Production build

```powershell
npm.cmd run build
npm.cmd run preview
```

## GitHub Pages'e alma

1. GitHub'da `AhmetYavuzZ.github.io` isminde public bir repo oluştur.
2. Bu klasörü o repoya bağla:

```powershell
git remote add origin https://github.com/AhmetYavuzZ/AhmetYavuzZ.github.io.git
git branch -M main
git push -u origin main
```

3. GitHub repo içinde `Settings > Pages` bölümüne gir.
4. `Source` olarak `GitHub Actions` seç.
5. Push işleminden sonra `.github/workflows/deploy.yml` dosyası siteyi otomatik yayınlar.

## Önemli not

`astro.config.mjs` içinde `site` değeri `https://ahmetyavuzz.github.io` olarak ayarlı.
GitHub kullanıcı adın farklıysa bunu kendi gerçek `github.io` adresinle değiştir.
