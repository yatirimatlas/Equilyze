# EQUILYZE — Mimari ve Ürün Kararları (append-only)

## 2026-07-21 — FAZ 0 Başlangıcı

### Bekleme Listesi Servisi
- **Karar:** Formspree kullanılacak (statik hosting uyumlu, ücretsiz katman yeterli)
- **Gerekçe:** Formspree, statik siteler için ideal bir form backend'idir. GitHub Pages/Netlify ile sorunsuz çalışır, rate limit'i yoktur, e-posta bildirimi gönderir. Buttondown'a kıyasla daha genel amaçlıdır ve gelecekte anket verisi toplamaya da uygundur.
- **Not:** Gerçek form ID'si (YOUR_FORM_ID) kullanıcı tarafından Formspree hesabı açıldıktan sonra değiştirilecek.

### Fiyatlandırma Stratejisi
- **Karar:** Tüm plan kartları tek "Erken Erişim" kartına indirgendi
- **Gerekçe:** Ödeme altyapısı yok, fiyat vaadi vermek yanlış olurdu. "İlk 6 ay her şey ücretsiz" çerçevesi, talep doğrulaması için yeterli sinyali toplar. Mikro anketteki "ne ödersin" sorusu korundu — gelecekteki fiyatlama için sinyal toplamaya devam edecek.

### Veri Stratejisi
- **Karar:** Statik demo portföy değerleri korundu ancak "ÖRNEK PORTFÖY" ve "demo" etiketleri eklendi
- **Gerekçe:** Backend olmadan gerçek kullanıcı portföy verisi mümkün değil. Canlı piyasa verisi çekme (CoinGecko API) FAZ 1'e ertelendi. Şu anki vitrin tasarım doğrulaması için yeterli.

### Tavsiye Dili Temizliği
- **Karar:** "öneriyorum", "tavsiye", "stop-loss kontrol et" gibi ibareler nötr bilgi diline çevrildi
- **Gerekçe:** SPK mevzuatına ve sözleşmenin 0.2 maddesine uyum.
