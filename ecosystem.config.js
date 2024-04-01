module.exports = {
    apps: [
        {
            name: 'react', // Uygulama adı
            script: 'yarn', // Komutu belirtin
            args: 'start', // Komut argümanları
            cwd: '.', // Uygulamanın dizini
            instances: 1, // Örnekleme sayısı
            autorestart: true, // Otomatik yeniden başlatma
            watch: false, // Dosyaları izleme
            max_memory_restart: '1G', // Maksimum bellek kullanımı
            env: {
                NODE_ENV: 'production', // Ortam değişkenleri
            },
            env_production: {
                NODE_ENV: 'production',
            },
        },
    ],
};
