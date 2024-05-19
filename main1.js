// Firebase yapılandırma bilgileri
const firebaseConfig = {
    apiKey: "AIzaSyB3xJusqvk9jclxf6q0dFvZW9-ANPvyjSM",
    authDomain: "ciro-app.firebaseapp.com",
    databaseURL: "https://ciro-app-default-rtdb.firebaseio.com",
    projectId: "ciro-app",
    storageBucket: "ciro-app.appspot.com",
    messagingSenderId: "153428123912",
    appId: "1:153428123912:web:e9d9035d47d2085196ccbd"
};

// Firebase'i başlatma
firebase.initializeApp(firebaseConfig);

// Firebase veritabanı referansı
var database = firebase.database();

// Form gönderildiğinde veriyi veritabanına kaydet
document.getElementById('ciroForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Sayfanın yeniden yüklenmesini engellemek için

    var dosyaAdiK = document.getElementById('dosyaAdiK').value;
    
    if (!dosyaAdiK) {
        alert('Kaydedilecek dosya adı boş olamaz!');
        return;
    }

    // Her gün için metin alanlarından değerleri al
    var gun1 = document.getElementById('gun1').value;
    var gun2 = document.getElementById('gun2').value;
    var gun3 = document.getElementById('gun3').value;
    var gun4 = document.getElementById('gun4').value;
    var gun5 = document.getElementById('gun5').value;
    var gun6 = document.getElementById('gun6').value;
    var gun7 = document.getElementById('gun7').value;
    var gun8 = document.getElementById('gun8').value;
    var gun9 = document.getElementById('gun9').value;
    var gun10 = document.getElementById('gun10').value;
    var gun11 = document.getElementById('gun11').value;
    var gun12 = document.getElementById('gun12').value;
    var gun13 = document.getElementById('gun13').value;
    var gun14 = document.getElementById('gun14').value;
    var gun15 = document.getElementById('gun15').value;
    var gun16 = document.getElementById('gun16').value;
    var gun17 = document.getElementById('gun17').value;
    var gun18 = document.getElementById('gun18').value;
    var gun19 = document.getElementById('gun19').value;
    var gun20 = document.getElementById('gun20').value;
    var gun21 = document.getElementById('gun21').value;
    var gun22 = document.getElementById('gun22').value;
    var gun23 = document.getElementById('gun23').value;
    var gun24 = document.getElementById('gun24').value;
    var gun25 = document.getElementById('gun25').value;
    var gun26 = document.getElementById('gun26').value;
    var gun27 = document.getElementById('gun27').value;
    var gun28 = document.getElementById('gun28').value;
    var gun29 = document.getElementById('gun29').value;
    var gun30 = document.getElementById('gun30').value;
    var gun31 = document.getElementById('gun31').value;

    var ortalama = document.getElementById('ortalama').value;

    // Veritabanına veri yazma
    var veriler = {
        gun1: gun1,
        gun2: gun2,
        gun3: gun3,
        gun4: gun4,
        gun5: gun5,
        gun6: gun6,
        gun7: gun7,
        gun8: gun8,
        gun9: gun9,
        gun10: gun10,
        gun11: gun11,
        gun12: gun12,
        gun13: gun13,
        gun14: gun14,
        gun15: gun15,
        gun16: gun16,
        gun17: gun17,
        gun18: gun18,
        gun19: gun19,
        gun20: gun20,
        gun21: gun21,
        gun22: gun22,
        gun23: gun23,
        gun24: gun24,
        gun25: gun25,
        gun26: gun26,
        gun27: gun27,
        gun28: gun28,
        gun29: gun29,
        gun30: gun30,
        gun31: gun31,
        ortalama: ortalama
    }

    database.ref('dosyalar/' + dosyaAdiK).set(veriler).then(function() {
        console.log('Veriler başarıyla kaydedildi.');
    }).catch(function(error) {
        console.error('Veri kaydetme hatası:', error);
    });
});

var dosyaGosterButton = document.querySelector('button[type="button"]');

dosyaGosterButton.addEventListener('click', function(event) {
    event.preventDefault(); // Sayfanın yeniden yüklenmesini engellemek için

    // Gösterilecek dosya adını alın
    var dosyaAdiG = document.getElementById('dosyaAdiG').value;

    // Gösterilecek dosya adı boşsa uyarı verin
    if (!dosyaAdiG) {
        alert('Gösterilecek dosya adı boş olamaz!');
        return;
    }

    // Dosya adını kullanarak veritabanından ilgili verileri çekin
    database.ref('dosyalar/' + dosyaAdiG).once('value').then(function(snapshot) {
        var dosyaData = snapshot.val();

        // Dosya verilerini ekrana yazdırın veya başka bir işlem yapın
        console.log('Dosya Verileri:', dosyaData);
        // Toplam ciroyu hesaplayın ve ekrana yazdırın
        var toplamCiro = calculateToplamCiro(dosyaData);
        document.getElementById('toplamCiroDegeri').textContent = toplamCiro;
        
        var ortalamaCiro = calculateOrtalamaCiro(dosyaData);
        document.getElementById('ortalamaCiroDegeri').textContent = ortalamaCiro;

        // Veriyi txt dosyası olarak indir
        var textContent = generateTextContent(dosyaData);
        downloadAsTextFile(dosyaAdiG + '.txt', textContent);
    }).catch(function(error) {
        console.error('Dosya alımı hatası:', error);
    });
});

// Firebase veritabanından veri al
database.ref('ciro').once('value').then(function(snapshot) {
    var ciroData = snapshot.val();

    // HTML içeriğini güncelle
    document.getElementById('toplamCiroDegeri').textContent = calculateToplamCiro(ciroData);
    document.getElementById('ortalamaCiroDegeri').textContent = calculateOrtalamaCiro(ciroData);
    // Diğer değerleri de güncelleyin
}).catch(function(error) {
    console.error('Veri alımı hatası:', error);
});

// Sayfa yüklendiğinde veya yenilendiğinde ciro verilerini al ve işle

// Toplam ciroyu hesaplayan fonksiyon
// Toplam ciroyu hesaplayan fonksiyon
function calculateToplamCiro(ciroData) {
    var toplamCiro = 0;
    for (var gun in ciroData) {
        if (ciroData.hasOwnProperty(gun) && gun.startsWith('gun')) {
            if (ciroData[gun] !== "") {
                toplamCiro += parseFloat(ciroData[gun]);
            }
        }
    }
    return toplamCiro.toFixed(2); // Toplam cironun iki ondalık basamağa yuvarlanması
}

// Ortalama ciro hesaplama fonksiyonu
function calculateOrtalamaCiro(ciroData) {
    var toplamCiro = 0;
    var gunSayisi = 0;

    for (var gun in ciroData) {
        if (ciroData.hasOwnProperty(gun) && gun.startsWith('gun')) {
            if (ciroData[gun] !== "") {
                toplamCiro += parseFloat(ciroData[gun]);
                gunSayisi++;
            }
        }
    }
    
    return gunSayisi > 0 ? (toplamCiro / gunSayisi).toFixed(2) : 0; // Ortalama ciro hesaplama
}

// Dosya içeriğini metin olarak oluşturma
function generateTextContent(data) {
    var textContent = "";
    for (var key in data) {
        if (data.hasOwnProperty(key)) {
            textContent += key + ": " + data[key] + "\n";
        }
    }
    return textContent;
}

// Metin dosyası olarak indirme
function downloadAsTextFile(filename, content) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(content));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}
