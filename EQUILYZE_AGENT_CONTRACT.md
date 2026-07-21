# EQUILYZE — OTONOM GELİŞTİRME SÖZLEŞMESİ v1.0

Bu doküman, Equilyze projesini (portföy & trading risk-analiz platformu)
geliştirecek AI ajanının bağlayıcı çalışma sözleşmesidir. ITOS v1.2
sözleşmesinin kanıtlanmış kalıbı üzerine kurulmuştur: ön-kayıtlı kapılar,
dürüst ölçüm, append-only kanıt, kullanıcı onayında ilerleme.

PROJE KÖKÜ: `Equilyze/` (bu klasör). Mevcut varlık: `index.html` —
7.900 satırlık tek-dosya vitrin (tasarım tamam, backend YOK, tüm veriler demo).

ÇALIŞMA ORTAMI: Windows + opencode + DeepSeek. Bu sözleşme kendi başına
yeterlidir — ajanın başka bağlama erişimi olmadığı varsayılır; belirsizlikte
sözleşme lafzı esastır. Tüm script/kurulum çıktıları Windows-uyumlu üretilir
(PowerShell `.ps1` veya çift-tıklanabilir `.bat`; Unix-only komut verilmez).
ITOS referansı `ITOS_REFERANS/` klasöründedir (bkz. Bölüm 1).

## 0. TEMEL İLKELER (pazarlık edilemez)

1. **Dürüstlük:** Gerçek olmayan hiçbir iddia yayında kalamaz. Sahte sosyal
   kanıt, uydurma kullanıcı sayısı, kanıtsız performans iddiası yasak. Demo
   veriler her zaman görünür "DEMO" etiketi taşır.
2. **Uyum:** Kişiye özel yatırım tavsiyesi DİLİ dahi yasak. Ürün "analiz ve
   farkındalık aracı"dır; "şunu al/sat/kapat" formunda hiçbir çıktı üretmez.
   Her analitik ekranda kalıcı "yatırım tavsiyesi değildir" ibaresi. SPK
   mevzuatına temas eden her özellik kararında kullanıcıya "hukuki görüş
   gerektirir" bayrağı kaldırılır — ajan hukuki değerlendirme YAPMAZ.
3. **Güvenlik:** Yalnızca SALT-OKUNUR borsa API anahtarları kabul edilir;
   bağlanan anahtarın izinleri programatik doğrulanır — trade/withdrawal
   yetkisi taşıyan anahtar REDDEDİLİR ve kullanıcı uyarılır. Secrets asla
   commit edilmez; anahtarlar sunucuda şifreli (envelope encryption) saklanır.
   Emir iletimi/otomatik işlem TÜM fazlarda kapsam dışıdır.
4. **Kapı disiplini:** Talep kanıtlanmadan platform makinesi kurulmaz. Her
   kapının eşiği ÖNCEDEN yazılır; sonuca bakıp eşik değiştirilemez. Kapı
   geçilemezse dürüst PIVOT/DUR raporu yazılır — bu başarısızlık değil, ucuz
   öğrenmedir.
5. **Tek iş kuralı:** Aynı anda tek modül. Hiçbir modül yarım bırakılıp
   yenisine geçilmez.

## 1. ITOS REFERANS KULLANIMI

`ITOS_REFERANS/` klasöründeki dosyalar SALT-OKUNUR ilham kaynağıdır:
- `CLAUDE.md` → yönetişim/kapı kalıbı
- `Trading-OS/25_Strategy_Registry/c4b_*` → karar sözlüğü ve kanıt-kalıcılaştırma deseni
- `KURULUM_*.command` → kullanıcı-dostu kurulum script UX kalıbı (Windows'ta
  `.ps1`/`.bat` eşleniği üretilir)
- Monte Carlo / maliyet / IS-OOS disiplini → M4 ve M7 modüllerinde uygulanacak metodoloji

YASAK: Equilyze kodundan ITOS koduna import/bağımlılık kurmak; referans
klasöründeki hiçbir dosyayı değiştirmek; referans içinde `.env*`, anahtar,
token veya kimlik bilgisi bulunursa OKUMAYI DERHAL DURDURUP kullanıcıya
bildirmek (bu dosyalar referansa hiç kopyalanmamalıydı) ve içeriğini hiçbir
çıktıya/loga yazmamak. İki proje ayrı yaşar.

## 2. FAZ 0 — DÜRÜST VİTRİN + BEKLEME LİSTESİ (ilk iş)

### ÇIKAR
- "Binlerce Yatırımcı Güveniyor" bölümü ve tüm uydurma güven sayaçları
  ("Analiz Edilen İşlem", "Takip Edilen Portföy" sayıları)
- "S&P 500'den %1 daha iyi" ve benzeri kanıtsız performans iddiaları
- Gerçekmiş gibi sunulan statik portföy değerleri (₺847.250 vb.) — "ÖRNEK
  PORTFÖY" etiketli, canlı fiyatlarla hesaplanan versiyona dönüştürülür
  (bkz. DEĞİŞTİR → Veri stratejisi)
- Tavsiye diline kayan uyarı metinleri ("stop-loss seviyeleri kontrol
  edilmeli" → "drawdown eşiğinize ulaşıldı" gibi nötr bilgiye çevir)

### DEĞİŞTİR
- Fiyatlandırma → **"Erken Erişim — ilk 6 ay her şey ücretsiz"** çerçevesi.
  Ödeme altyapısı YOK, fiyat vaadi YOK; plan kartları "6 ay sonra
  fiyatlandırma duyurulacak" notuyla kalabilir veya tek "Erken Erişim"
  kartına indirgenir (ajan seçer). Mikro anketteki "ne ödersin" sorusu
  KALIR — gelecekteki fiyatlama için sinyal toplar.
- **Veri stratejisi — gerçek piyasa verisi, etiketli örnek portföy:**
  - PİYASA verileri (BTC/ETH fiyatları, Fear & Greed, korelasyonlar, piyasa
    göstergeleri) CANLI çekilir — CORS-dostu ücretsiz kamu API'leri
    (CoinGecko vb.; ajan fizibilite testi yapıp seçer, rate limit'e saygılı,
    istemci-tarafı cache'li). Statik hosting korunur; gerekirse tek küçük
    serverless proxy (ücretsiz katman) kullanılabilir.
  - PORTFÖY verileri (pozisyonlar, K/Z, ₺ değerler) kullanıcı hesap
    bağlamadan gerçek OLAMAZ → "ÖRNEK PORTFÖY" olarak açıkça etiketlenir,
    AMA tüm hesaplamaları (Monte Carlo, korelasyon, skorlar) canlı piyasa
    fiyatlarıyla GERÇEK matematikle koşar. Yani: gerçek motor + etiketli
    örnek girdi. Uydurma statik sayı bırakılmaz.
- Metodoloji iddiaları (GBM, 10k iterasyon, VaR/CVaR) → korunur AMA her biri
  kısa bir "Metodoloji" açıklamasına bağlanır (bu ürünün güven dili olacak)

### EKLE
- Bekleme listesi: e-posta formu (statik-uyumlu servis: Formspree/Buttondown
  benzeri; ajan gerekçeli seçer), çift onay, KVKK aydınlatma metni taslağı
  (hukuki inceleme bayrağıyla), çerez bildirimi
- Kalıcı yasal uyarı dipnotu (her sayfa)
- Basit dönüşüm ölçümü: ziyaret→kayıt oranı (gizlilik-dostu, ör. kendi
  sayacın veya Plausible benzeri; Google Analytics zorunlu değil)
- 2-3 soruluk mikro anket (kayıt sonrası): "En çok hangi özellik?", "Bunun
  için aylık ne ödersin?" — KAPI 1'in görüşme adayları buradan seçilir
- Yayın: statik hosting (GitHub Pages/Netlify/Vercel — ajan seçer, kurulum
  adımlarını KURULUM script kalıbıyla kullanıcıya hazırlar)

FAZ 0 çıktısı: yayında, dürüst, kayıt toplayan vitrin. Kod hâlâ tek dosya
kalabilir — refactor KAPI 1 sonrasına ertelenir (erken mimari yatırımı israf).

## 3. KAPI 1 — TALEP DOĞRULAMA (ön-kayıtlı eşik)

Süre: yayından itibaren 4 hafta (kullanıcının tanıtım çabasından bağımsız
ölçülür; kullanıcı hangi kanallarda paylaştığını rapora yazar).
GEÇME eşiği (şimdi kilitlenir): **≥100 bekleme listesi kaydı VE ≥10 kullanıcı
görüşmesi VE görüşülenlerin ≥5'inin "ilk 6 ay ücretsiz erişimi hemen
kullanırım" demesi** (ödeme şartı yok — ücretsiz dönemde talep sinyali
kullanım niyetidir; mikro anketin "ne ödersin" verisi ayrıca raporlanır).
- Geçerse → FAZ 1.
- Geçmezse → PIVOT raporu: hangi mesaj tuttu/tutmadı, anket verisi, üç
  alternatif konumlandırma önerisi. Platform inşaatı BAŞLAMAZ.

## 4. FAZ 1 — KAMA MVP (yalnızca KAPI 1 sonrası)

Tek borsa, tek özellik hattı: **Binance salt-okunur bağlantı → portföy içe
aktarma → risk profili → profil-uyumsuzluk uyarıları → Hayatta Kalma Skoru.**
Diğer tüm modüller (makro şok, kural oluşturucu, psikolojik rapor, korelasyon)
FAZ 2+ backlog'unda bekler — kama kanıtlanmadan genişleme yok.

Teknik çerçeve (öneri; ajan gerekçeli değiştirebilir, kararları DECISIONS.md'ye):
- Backend: Python/FastAPI (ITOS ile dil sürekliliği), Postgres
- Anahtar kasası: envelope encryption (libsodium/KMS), anahtar izin
  doğrulaması bağlantı anında
- Auth: e-posta + magic link veya argon2 şifre; 2FA backlog'da
- Frontend: mevcut tasarım sistemi korunarak bileşenlere ayrıştırma
- Test: pytest (birim+entegrasyon) + Playwright smoke; CI: GitHub Actions
- Binance erişimi: kullanıcının ağ kısıtları biliniyorsa (bkz. ITOS deneyimi:
  fapi engelli olabilir) sunucu tarafı konumu buna göre seçilir — bu bir
  FİZİBİLİTE adımıdır, ilk sprint'te doğrulanır

KAPI 2 (FAZ 1 sonu, şimdi kilitlenir): **≥25 gerçek kullanıcı bağlı hesapla
aktif VE 4. haftada ≥%40'ı hâlâ haftalık giriş yapıyor.** Geçerse FAZ 2
modül genişlemesi; geçmezse tutundurma analizi + revizyon, yeni modül yok.

## 5. MODÜL SİSTEMİ — AYRI GELİŞTİRME + BAĞIMSIZ SKORLAMA

Her modül izole birimdir ve şu yaşam döngüsünden geçer:

**SPEC → BUILD → TEST → SELF-REVIEW → SKOR (ayrı değerlendirici) → RAPOR → MERGE/REVİZE/RED**

1. **SPEC:** girdi/çıktı sözleşmesi, kabul kriterleri, bilinen-girdi→bilinen-
   çıktı test fixture'ları ÖNCE yazılır ve hash'lenir (ITOS ön-kayıt kalıbı).
   Büyük modüllerde kullanıcı onayı alınır.
2. **BUILD:** küçük commit'ler, tek modül dalı.
3. **TEST:** tüm fixture'lar + regresyon yeşil olmadan ilerlenmez.
4. **SELF-REVIEW:** aşağıdaki rubrik üzerinden öz-değerlendirme notu.
5. **SKOR — ayrı değerlendirici:** modülü YAZAN oturum değerlendirME yapamaz.
   Temiz bir oturum/subagent, yalnızca SPEC + kod + test çıktılarıyla rubriği
   puanlar (yazarın notlarını görmeden). İki puan arasındaki fark >15 ise
   üçüncü bir değerlendirme koşulur.
6. **Eşikler:** ≥80 MERGE · 60–79 REVİZE (tek tur; ikinci turda hâlâ <80 ise
   yeniden tasarım) · <60 RED. Tüm skorlar `SCORES.md`'ye append-only.

### Skorlama rubriği (100 puan)
| Boyut | Puan | Ölçüm |
|---|---|---|
| Doğruluk & test kapsamı | 30 | fixture geçişi, kenar durumlar, sayısal doğrulama (finans matematiği için bağımsız yeniden hesaplama) |
| Güvenlik | 20 | secrets taraması, injection, anahtar-izin kontrolü, veri sızıntısı |
| Dürüstlük & uyum | 20 | tavsiye dili yok, metodoloji açıklaması var, DEMO etiketleri, disclaimer yerinde |
| Performans | 10 | tanımlı bütçeler (ör. Monte Carlo <5 sn/10k yol, sayfa <3 sn) |
| UX & erişilebilirlik | 10 | mobil, klavye, kontrast, boş-veri durumları |
| Kod kalitesi | 10 | okunabilirlik, bağımlılık hijyeni, log/observability |

### Modül backlog'u (öncelik sırası — FAZ 1 kaması: M1–M4)
- **M1** Binance salt-okunur içe aktarma (+ anahtar izin doğrulayıcı)
- **M2** Risk Profili motoru (anket + portföy-türevli metrikler; skorlamanın
  metodolojisi belgeli)
- **M3** Profil-uyumsuzluk uyarıları (nötr bilgi dili — tavsiye değil)
- **M4** Hayatta Kalma Skoru / Monte Carlo (GBM; seed'li ve yeniden
  üretilebilir; varsayımlar — drift/vol kaynağı, korelasyon — belgeli;
  ITOS istatistik disiplini birebir)
- **M5** Korelasyon matrisi + P&L ısı haritası
- **M6** Makro Şok Simülatörü (senaryolar tarihsel olaylara kaynaklı;
  "temsili senaryo" etiketi zorunlu)
- **M7** Kodsuz Kural Oluşturucu + geçmiş karşılaştırma — DİKKAT: ITOS'un beş
  ölçüm dersinin tamamı burada bağlayıcı (gerçekçi fill, maliyet dahil,
  IS/OOS ayrımı, look-ahead yasağı, "önce/sonra" karşılaştırmasında overfit
  uyarısı kullanıcıya GÖSTERİLİR). Bu modül dürüst yapılamıyorsa yapılmaz.
- **M8** Psikolojik/davranışsal rapor (journal analitiği)
- **M9** Manuel varlık (RWA) girişi
- **M10** Eğitim içeriği çerçevesi

## 6. RAPORLAMA & KAYIT

- `DECISIONS.md` — append-only mimari/ürün kararları (tarih + gerekçe)
- `SCORES.md` — append-only modül skorları
- `GATES.md` — kapı eşikleri (kilitli) + sonuçları
- Her faz sonunda kullanıcıya kısa rapor: yapılan, skorlar, sıradaki kapı,
  kullanıcıdan beklenen (varsa)
- Kullanıcının onayını gerektirenler: kapı geçiş kararları, ödeme altyapısı,
  üçüncü-taraf servis hesapları, hukuki metinlerin yayını, her türlü
  gerçek-kullanıcı-verisi işleme değişikliği

## 7. İLK OTURUM GÖREV LİSTESİ

1. `index.html`'i oku, FAZ 0 ÇIKAR/DEĞİŞTİR/EKLE listesini uygula
2. Bekleme listesi + ölçüm + yasal metin taslakları (hukuk bayrağıyla)
3. Statik yayın kurulumunu kullanıcı adımlarıyla hazırla (KURULUM kalıbı)
4. `GATES.md`'ye KAPI 1 ve KAPI 2 eşiklerini kilitle
5. `DECISIONS.md` + `SCORES.md` dosyalarını başlat
6. Rapor ver ve KAPI 1 saatini başlatmak için kullanıcı onayı iste
