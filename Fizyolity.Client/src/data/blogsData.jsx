import {
  RiUserCommunityLine,
  RiRestaurantLine,
  RiStethoscopeLine,
} from "react-icons/ri";

const blogsData = [
  {
    id: 1,
    iconClass: (
      <RiUserCommunityLine className="w-14 h-14 p-2 text-white bg-fizyolity rounded-full border border-white/60" />
    ),
    title: "Fizyoterapi Danışmanlığı",
    slug: "fizyoterapiDanismanligi",
    author: "Fatma Çakıllı",
    publishedDate: "2024-10-14",
    excerpt:
      "Fizyoterapi, hareket ve fonksiyonları geliştirmek, ağrıyı azaltmak ve genel yaşam kalitesini artırmak için uygulanan bir tedavi yöntemidir.",
    content: (
      <>
        <p>
          Fizyoterapi, hareket ve fonksiyonları geliştirmek, ağrıyı azaltmak ve
          genel yaşam kalitesini artırmak için uygulanan bir tedavi yöntemidir.
          Uzman fizyoterapistlerimiz eşliğinde mevcut şikayetleriniz ve
          vücudunuz değerlendirildikten sonra sizlere uygun tedavi planı
          oluşturulur ve gerekli teknikler kullanılarak sizleri en iyi halenize
          ulaştırmak amaçlanır.
        </p>
      </>
    ),
    coverImage:
      "/img/blogs/fizyoterapiDanismanlik/fizyoterapi-danışmanlık.webp",
    tags: ["Omurga", "Fizyoterapi", "Beden Sağlığı"],
    href: "/blog/fizyoterapi-danismanligi",
  },
  {
    id: 2,
    iconClass: (
      <RiRestaurantLine className="w-14 h-14 p-2 text-white bg-fizyolity rounded-full border border-white/60" />
    ),
    title: "İş Merkezlerine Sağlık Danışmanlığı",
    slug: "isMerkezlerineSaglikDanismanligi",
    author: "Fatma Çakıllı",
    publishedDate: "2024-10-14",
    excerpt:
      "Fizyolity’de, iş merkezinizin analizini yaparak sizlerin ihtiyacına en uygun şekilde bütüncül bir yaklaşımla fizyoterapi, beslenme danışmanlığı ve psikolojik desteği içeren özel bir paket oluşturulur.",
    content: (
      <>
        <p>
          Fizyolity’de, iş merkezinizin analizini yaparak sizlerin ihtiyacına en
          uygun şekilde bütüncül bir yaklaşımla fizyoterapi, beslenme
          danışmanlığı ve psikolojik desteği içeren özel bir paket oluşturulur.{" "}
          <b>Bu paket hizmeti ile</b> çalışanların genel sağlığını,
          verimliliğini ve motivasyonunu artırmayı amaçlayan profesyonel bir
          hizmettir. Bu danışmanlık, çalışanların fiziksel ve zihinsel
          sağlıklarını korumak, işyerinde daha sağlıklı bir yaşam tarzı
          benimsemelerini sağlamak için özelleştirilmiş sağlık programları
          sunar. İş yerinde sağlık bilincini artırarak, uzun vadede daha mutlu
          ve üretken bir çalışma ortamı yaratılır. Bu hizmet, iş yerinde
          ergonomik düzenlemelerden, stres yönetimi, psikolojik destek ve
          sağlıklı beslenme programlarına kadar geniş bir yelpazede destek
          sunar. <b>İş merkezlerine yönelik sağlık danışmanlığı</b>, sık görülen
          ofis hastalıklarını önlemede, çalışanların enerji seviyelerini
          yükseltmede ve genel iş performansını artırmada kritik bir rol oynar.
        </p>
      </>
    ),
    coverImage:
      "/img/blogs/isMerkezlerineSaglikDanismanligi/is-merkezlerine.webp",
    tags: ["Danışmanlık", "Fizyoterapi", "Sağlık Danışmanlığı"],
    href: "/blog/beslenme-danismanligi",
  },
  {
    id: 3,
    iconClass: (
      <RiStethoscopeLine className="w-14 h-14 p-2 text-white bg-fizyolity rounded-full border border-white/60" />
    ),
    title: "Beslenme Danışmanlığı",
    slug: "beslenmeDanismanligi",
    author: "Fatma Çakıllı",
    publishedDate: "2024-10-14",
    excerpt:
      "Bireylerin sağlıklı ve dengeli bir yaşam sürmelerini destekleyen kişiye özel bir hizmettir.",
    content: (
      <>
        <p>
          Bireylerin sağlıklı ve dengeli bir yaşam sürmelerini destekleyen
          kişiye özel bir hizmettir. Bu süreçte, danışanın yaş, cinsiyet, sağlık
          durumu, yaşam tarzı, psikolojik ihtiyaçları ve beslenme hedefleri
          detaylı bir şekilde değerlendirilir.
          <b>Kişiye özel beslenme planları</b>, yalnızca fiziksel ihtiyaçları
          karşılamakla kalmaz, aynı zamanda bireyin motivasyonunu artırmayı ve
          uzun vadeli başarıyı sağlamayı hedefler. Bu planlar, sağlıklı bir
          bedenin yanı sıra güçlü bir zihin için de gerekli olan tüm unsurları
          içerir. Beslenme danışmanlığı süresince, uzmanlar düzenli takip ve
          destek sunarak bireyin hem bedensel hem de zihinsel sağlığını
          güçlendirmeyi amaçlar. Sağlıklı bir yaşam tarzını benimsemek isteyen
          herkes için <b>beslenme danışmanlığı</b>, güvenilir bir rehberdir. Bu
          kişiye özel yaklaşım sayesinde, hem fiziksel sağlığınızı en üst düzeye
          çıkarabilir hem de genel yaşam kalitenizi artırabilirsiniz.
        </p>
      </>
    ),
    coverImage: "/img/blogs/beslenmeDanismanligi/Beslenme-Danismanligi.webp",
    tags: ["Beslenme", "Danışmanlık", "Kişiye Özel"],
    href: "/blog/beslenme-danismanligi",
  },
  {
    id: 4,
    title: "Sporcu Beslenmesi",
    slug: "sporcuBeslenmesi",
    author: "Fatma Çakıllı",
    publishedDate: "2024-10-14",
    excerpt:
      "Sporcu beslenmesi, sporcu olarak performansınızı en üst düzeye çıkarmak ve hedeflerinize ulaşmak istiyorsanız, doğru beslenme kritik bir rol oynar.",
    content: (
      <>
        <p>
          <b>Sporcu beslenmesi</b>, sporcu olarak performansınızı en üst düzeye
          çıkarmak ve hedeflerinize ulaşmak istiyorsanız, doğru beslenme kritik
          bir rol oynar. Size özel bir beslenme planı oluşturulması, antrenman
          öncesi, sırası ve sonrasında en yüksek verimi almanızı sağlar. Aynı
          zamanda doğru besinler toparlanma sürecinizi hızlandırır, kilo
          kontrolü ve kas gelişimi gibi hedeflerinize de ulaşmanıza yardımcı
          olur, sakatlık riskini azaltır ve mevcut sakatlıkların iyileşme
          sürecini hızlandırır. Performansınızı artırmak ve sağlıklı bir şekilde
          ilerlemek için birlikte çalışabiliriz.
        </p>
      </>
    ),
    coverImage: "/img/blogs/sporcuBeslenmesi/sporcu-beslenmesi.webp",
    tags: ["Beslenme", "Danışmanlık", "Kişiye Özel"],
    href: "/blog/beslenme-danismanligi",
  },
  {
    id: 5,
    title: "Gebelikte Beslenme",
    slug: "gebelikteBeslenme",
    author: "Fatma Çakıllı",
    publishedDate: "2024-10-14",
    excerpt:
      "Gebelik dönemi, çocuğunuzun hayata sağlıklı bir başlangıç yapabilmesi için, hamilelik öncesinde vücudunuzu bu sürece hazırlamak oldukça önemli bir adımdır.",
    content: (
      <>
        <p>
          <b>Gebelik dönemi</b>, çocuğunuzun hayata sağlıklı bir başlangıç
          yapabilmesi için, hamilelik öncesinde vücudunuzu bu sürece hazırlamak
          oldukça önemli bir adımdır. Anne karnındaki gelişim, bebeğinizin
          sadece doğum anını değil, tüm yaşamını etkileyen bir süreçtir. Bu
          nedenle, hamile kalmadan önce sağlıklı bir beslenme düzeni oluşturmak,
          hem sizin sağlığınız hem de bebeğinizin gelişimi için hayati bir rol
          oynar. Hamilelik süresince doğru besinleri tüketmek, bebeğin
          organlarının ve beyin gelişiminin sağlıklı bir şekilde tamamlanmasına
          büyük katkı sağlar. Aynı zamanda bu süreç, aşerme ve tiksinme gibi
          zorlukların daha rahat geçmesini sağlayarak, hamileliğinizi konforlu
          bir hale getirir. Kan tahlili sonuçlarınıza dayalı olarak, vücudunuzun
          ve bebeğinizin ihtiyaç duyduğu vitamin ve mineralleri içeren özel
          beslenme planlarıyla bu döneme hazırlanmak, sağlıklı bir gebelik
          sürecine kapı aralar. Bu yolculuk, doğru rehberlik ve motivasyonla
          ilerleyerek, sağlıklı bir bebeğin dünyaya gelmesiyle son bulacak ve
          yaşamınızda kalıcı bir iz bırakacaktır. Süreci planlayarak hem
          bedeninizi hem de zihninizi hazırlıyor, sonunda bebeğinizin ilk
          sesiyle taçlanacak olan bu özel ve heyecan dolu serüvene adım
          atıyoruz.
        </p>
        <p>
          <b>Emzirme dönemi</b>, anne ve bebek arasındaki en özel bağlardan
          birini temsil ederken, annenin beslenmesi bu süreçte büyük bir rol
          oynar. Anne sütü, bebeğin ilk 6 ayında ihtiyaç duyduğu tüm besin
          öğelerini karşılayan mucizevi bir kaynaktır. Bu nedenle annenin
          dengeli ve yeterli beslenmesi, sütün kalitesini ve miktarını doğrudan
          etkiler. 9 ay boyunca yaşadığınız heyecanlı ve zorlu süreç sona
          erdiğinde, dünyaya yeni bir hayat getirme mutluluğu tarif edilemez bir
          duygu. Ancak, doğum sonrası vücudunuzda bir miktar fazla kilo kalmış
          olabilir ve bu oldukça normaldir. Eğer doğum sonrası bu kilolardan
          sağlıklı bir şekilde kurtulmak istiyorsanız, yanınızdayım! Unutmayın,
          emzirme döneminde doğru beslenme, sadece sizi değil, bebeğinizi de
          destekler.
        </p>
      </>
    ),
    coverImage: "/img/blogs/gebelikteBeslenme/gebelikte-beslenme.webp",
    tags: ["Beslenme", "Danışmanlık", "Kişiye Özel"],
    href: "/blog/beslenme-danismanligi",
  },
  {
    id: 6,
    title: "Klinik Pilates",
    slug: "klinikPilates",
    author: "Fatma Çakıllı",
    publishedDate: "2024-10-14",
    excerpt:
      "Klinik Pilates fiziksel rehabilitasyonu desteklemek, yaralanmalara karşı koruyucu bir önlem olarak kullanılmak ve iyileşme süreçlerini hızlandırmak amacıyla tasarlanmış özel bir programdır.",
    content: (
      <>
        <p>
          <b>Klinik Pilates</b> fiziksel rehabilitasyonu desteklemek,
          yaralanmalara karşı koruyucu bir önlem olarak kullanılmak ve iyileşme
          süreçlerini hızlandırmak amacıyla tasarlanmış özel bir programdır.
          Klinik pilates, kas güçlendirme, esneme ve postür düzeltme gibi
          hedeflere ulaşmayı amaçlayan egzersizlerden oluşur. Bu egzersizler,
          vücudun hareketi kısıtlı olan bölgelerine hareketi yeniden kazandırır
          ve kas dengesini iyileştirir. Özellikle rehabilitasyon sürecinde
          olanlar veya yaralanmaları önlemek isteyen bireyler için idealdir.
        </p>
      </>
    ),
    coverImage: "/img/blogs/klinikPilates/klinik_pilates.webp",
    tags: ["Beslenme", "Danışmanlık", "Kişiye Özel"],
    href: "/blog/beslenme-danismanligi",
  },
  {
    id: 7,
    title: "Reformer Pilates",
    slug: "reformerPilates",
    author: "Fatma Çakıllı",
    publishedDate: "2024-10-14",
    excerpt:
      "Reformer Pilates vücut dengesini, esnekliğini ve kas gücünü artırmayı hedefleyen, özel bir reformer aleti üzerinde yapılan bir pilates türüdür.",
    content: (
      <>
        <p>
          <b>Reformer Pilates</b> vücut dengesini, esnekliğini ve kas gücünü
          artırmayı hedefleyen, özel bir reformer aleti üzerinde yapılan bir
          pilates türüdür. Bu yöntem, doğru duruşu teşvik eder, core (merkez)
          kaslarını güçlendirir ve genel postürü iyileştirir. Reformer Pilates,
          her yaş ve fitness seviyesinden kişiye uygun egzersiz programları
          sunarak, kasları sıkılaştırır ve esnekliği artırır. Aynı zamanda
          yaralanmaların önlenmesine yardımcı olur ve rehabilitasyon sürecini
          destekler. Zayıf kasları güçlendirirken, aynı zamanda vücudu dengeli
          bir şekilde çalıştırarak uzun vadeli sonuçlar sağlar.
        </p>
      </>
    ),
    coverImage: "/img/blogs/reformerPilates/reformer_pilates.webp",
    tags: ["Beslenme", "Danışmanlık", "Kişiye Özel"],
    href: "/blog/beslenme-danismanligi",
  },
  {
    id: 8,
    title: "Gebelikte Pilates",
    slug: "hamilelerIcinPilates",
    author: "Fatma Çakıllı",
    publishedDate: "2024-10-14",
    excerpt:
      "Hamilelik süreçleri için pilates, hamilelik döneminde vücut dengesini korumak, kas gücünü artırmak ve doğuma hazırlık için pilates çok önemli bir rol oynar.",
    content: (
      <>
        <p>
          <b>Hamilelik süreçleri için pilates</b>, hamilelik döneminde vücut
          dengesini korumak, kas gücünü artırmak ve doğuma hazırlık için pilates
          çok önemli bir rol oynar. Bu özel süreç için hazırlanan pilates
          programları, anne adaylarının hem fiziksel hem de zihinsel olarak daha
          güçlü hissetmelerine yardımcı olur. Düzenli pilates uygulamaları,
          esnekliği artırır, duruşu iyileştirir ve sırt, bel ağrılarının
          azaltılmasına destek sağlar.
        </p>

        <h2>Hamilelikte Egzersiz</h2>
        <p>
          <b>Hamilelik</b>, vücudun birçok değişime uğradığı özel bir dönemdir.
          Bu süreçte, hızlı fiziksel değişimlere uyum sağlamak her zaman kolay
          olmayabilir ve bunun sonucunda ağrılar ortaya çıkabilir. Ancak,
          düzenli olarak yapılan egzersizler, bu zorluklarla başa çıkmayı
          kolaylaştırır ve hem bedensel hem de zihinsel rahatlama sağlar.
          Özellikle nefes egzersizleri ve pelvik taban kaslarını güçlendiren
          egzersizler, hamile kişinin vücudunu doğuma hazırlarken, aynı zamanda
          günlük yaşamda daha rahat hissetmesine yardımcı olur. Egzersizler,
          hamilelik sürecini daha keyifli ve sağlıklı hale getirirken, doğum
          sonrası toparlanmayı da hızlandırır. Egzersizler arasından vücudun
          ihtiyaçlarına göre mat pilates, aletli pilates, fonksiyonel egzersiz
          veya yoga tercih edilebilir.
        </p>

        {/* <img
          src="/img/blogs/hamilelerIcinPilates/hamilelikte-egzersiz.webp"
          alt="Hamilelik Blog Görseli"
          className="article-content-image w-full rounded shadow-md my-4"
          loading="lazy"
        /> */}
        <h3>Peki Hamilelikte Egzersiz Güvenli Midir?</h3>
        <p>
          Amerikan jinekoloji ve obstetrik derneği egzersizin hamilelikte güveni
          ile alakalı şunu söyler;
        </p>
        <ul>
          <li>
            Eğer herhangi bir sağlık probleminiz yoksa egzersiz başlamanız veya
            devam etmeniz güvenlidir.
          </li>
          <li>
            Fiziksel aktivite düşük, az doğum ağırlığı ve erken doğum riskini
          </li>
          <li>
            Prenatal süreçte egzersizlerinizi jinekoloğunuzla konuşmak yine de
            önemlidir.
          </li>
          <li>
            Eğer kadın doğum uzmanınız egzersiz için onay verirse hangi tip
            egzersizleri yapabileceğinizi kararlaştırabilirsin.
          </li>
        </ul>
      </>
    ),
    coverImage: "/img/blogs/hamilelerIcinPilates/hamilelikte-egzersiz.webp",
    tags: ["Beslenme", "Danışmanlık", "Kişiye Özel"],
  },
  {
    id: 9,
    title: "Yoga",
    slug: "yoga",
    author: "Fatma Çakıllı",
    publishedDate: "2024-10-14",
    excerpt:
      "Yoga, beden, zihin ve ruh arasındaki dengeyi sağlamayı amaçlayan, binlerce yıllık geçmişe sahip bir pratiktir.",
    content: (
      <>
        <p>
          <b>Yoga</b>, beden, zihin ve ruh arasındaki dengeyi sağlamayı
          amaçlayan, binlerce yıllık geçmişe sahip bir pratiktir. Düzenli yoga
          egzersizleri, hareket kabiliyetini artırır, kasları güçlendirir ve
          güçlü felsefesi ile stresle başa çıkmada etkili bir yöntem sunar. Aynı
          zamanda, derin nefes teknikleri ve meditasyonla birleştiğinde,
          zihinsel sakinliği destekler ve genel yaşam kalitesini yükseltir.
          Yoga, her yaştan ve her seviyeden kişi için uygundur.{" "}
          <b>
            Fizyoterapistlerimiz eşliğinde yoga adeta bir tedavi aracına dönüşür
          </b>{" "}
          ve bu sayede herkesin ihtiyaçlarına ve hedeflerine uygun bir stil
          bulunması mümkün hale gelir. Merkezimizde bilimsellikle harmanlanmış
          bu öğretiyi fizyoterapistlerimiz eşliğinde güvenli ve yararlı bir
          şekilde yapmayı mümkün kılıyoruz.
        </p>
      </>
    ),
    coverImage: "/img/blogs/yoga/doga-yoga.webp",
    tags: ["Beslenme", "Danışmanlık", "Kişiye Özel"],
  },
  {
    id: 10,
    title: "Swing Yoga",
    slug: "swingYoga",
    author: "Fatma Çakıllı",
    publishedDate: "2024-10-14",
    excerpt:
      "Swing Yoga, geleneksel yoga pozlarını havada, özel bir hamak yardımıyla uygulayarak esneklik, denge ve güç kazandıran yenilikçi bir yoga türüdür.",
    content: (
      <>
        <p>
          <b>Swing Yoga</b>, geleneksel yoga pozlarını havada, özel bir hamak
          yardımıyla uygulayarak esneklik, denge ve güç kazandıran yenilikçi bir
          yoga türüdür. Bu benzersiz yaklaşım, yer çekimini kullanarak omurgayı
          rahatlatır, derin esneme sağlar ve vücut ağırlığını kullanarak kasları
          daha etkili bir şekilde çalıştırır. Swing Yoga, özellikle omurga
          sağlığını iyileştirmek, stres yönetimi sağlamak ve genel beden
          farkındalığını artırmak isteyenler için idealdir. Hamak desteğiyle
          yapılan bu yoga stili, klasik yoga pozlarını daha erişilebilir hale
          getirirken, aynı zamanda zorlayıcı egzersizleri de eğlenceli ve
          güvenli bir şekilde deneyimlemenizi sağlar.
        </p>
      </>
    ),
    coverImage: "/img/blogs/swingYoga/swing-yoga.webp",
    tags: ["Beslenme", "Danışmanlık", "Kişiye Özel"],
  },
  {
    id: 11,
    title: "Osteopati",
    slug: "osteopati",
    author: "Fatma Çakıllı",
    publishedDate: "2024-10-14",
    excerpt:
      "Osteopati, vücudun kendi kendini iyileştirme yeteneğini destekleyen ve vücut bütünlüğünü koruyan bir tedavi yaklaşımıdır.",
    content: (
      <>
        <p>
          Osteopati, vücudun kendi kendini iyileştirme yeteneğini destekleyen ve
          vücut bütünlüğünü koruyan bir tedavi yaklaşımıdır. Osteopatlar,
          kas-iskelet sistemi, organlar ve sinir sistemleri arasındaki
          ilişkileri inceleyerek, sağlık sorunlarını doğal ve bütüncül bir
          şekilde ele alır.
        </p>
      </>
    ),
    coverImage: "/img/blogs/osteopati/osteopati.webp",
    tags: ["Beslenme", "Danışmanlık", "Kişiye Özel"],
  },
  {
    id: 12,
    title: "Ameliyatsız Bel Fıtığı",
    slug: "belFitigi",
    author: "Fatma Çakıllı",
    publishedDate: "2024-10-14",
    excerpt:
      "Osteopati, vücudun kendi kendini iyileştirme yeteneğini destekleyen ve vücut bütünlüğünü koruyan bir tedavi yaklaşımıdır.",
    content: (
      <>
        <p>
          <b>Bel ağrısı</b> , genel nüfusta rahatsızlığın başlıca nedenlerinden
          biri olarak kabul edilen, kas-iskelet sistemi bozukluklarının geniş
          bir kategorisidir ve dünya çapında bireylerin %65-85'ini etkileyen bir
          yaşam boyu görülme oranına sahiptir. Bel ağrısının spesifik
          nedenlerinden biri, sinir kökü tahrişi ile birlikte görülen lomber
          intervertebral disk rahatsızlıklarıdır. Etkilenen bireylerin çoğu 30
          ila 50 yaşları arasında olup, erkeklerde kadınlara göre daha yüksek
          bir prevalans gösterir.
          <i>
            Low-back pain (LBP) is a broad category of musculoskeletal disorders
            regarded as one of the primary causes of disability in the general
            population, with a lifetime incidence of 65–85% of individuals
            worldwide. One of the specific causes of LBP is lumbar
            intervertebral disc disorders with nerve root irritation. Most
            individuals affected fall within the age range of 30 to 50 years,
            with a higher prevalence in men than in women.
          </i>
        </p>
        <p>
          Bel ağrısı , dünya genelinde bireylerin %65-85'inde yaşam boyu görülme
          sıklığıyla, genel popülasyondaki rahatsızlığın başlıca nedenlerinden
          biri olarak kabul edilen bir kas-iskelet sistemi bozukluğudur . Bel
          ağrısının spesifik nedenlerinden biri, sinir kökü basısıyla birlikte
          bel omurlarındaki disk bozukluklarıdır. Etkilenen bireylerin çoğu 30
          ila 50 yaş aralığındadır ve erkeklerde kadınlara göre daha yüksek bir
          prevalansa sahiptir.
        </p>
        <p>
          Bel omurlarının arasında en sık L4-L5 ve L5-S1 seviyelerinde
          fıtıklaşma görülür. Radikülopati; semptomların sinir hattı boyunca
          bacağa doğru yayılması ise bu seviyedeki omurlardaki disk materyalinin
          taşarak sinir köküne bası yapmasıyla oluşur.
        </p>

        <p>
          Radikülopati genellikle tek taraflı olarak ortaya çıkan uyuşukluk,
          karıncalanma, güçsüzlük ve yayılan nöropatik tipte ağrı ile
          karakterizedir.
        </p>
        <p>
          Radikülopatili bel ağrısı tedavisi hem cerrahi olmayan hem de cerrahi
          prosedürlerden oluşur. Son on yılda omurga cerrahisi gerekliliğini
          azaltmak için girişimlerde bulunulmuştur.
          <u>
            Çoğu hasta, daha düşük komplikasyon riski ve daha düşük maliyet
            taşıdığı için konservatif tedaviyi ameliyata tercih eder
          </u>
          . Semptomlar şiddetli olduğunda, 6 haftadan uzun sürdüğünde veya
          konservatif tedaviyle düzelme sağlanamadığında cerrahi önerilmektedir.
        </p>
        <h5>Araştırma bulguları;</h5>
        <ul>
          <li>Saddle anestezisi</li>
          <li>Bağırsak veya mesane inkontinansı(idrar kaçırma)</li>
          <li>Bacakta ani felç veya kauda ekuina sendromu</li>
        </ul>
        <p>
          Gibi kötüleşen nörolojik semptomların yokluğunda, lomber radikülopati
          için cerrahi yaklaşımlardan önce cerrahi olmayan yaklaşımların
          düşünülmesi gerektiğini göstermektedir.
        </p>
      </>
    ),
    coverImage: "/img/blogs/belFitigi/bel-fitigi.webp",
    tags: ["Beslenme", "Danışmanlık", "Kişiye Özel"],
  },
  {
    id: 13,
    title: "Fonksiyonel Egzersiz",
    slug: "fonksiyonelEgzersiz",
    author: "Fatma Çakıllı",
    publishedDate: "2024-10-14",
    excerpt:
      "Osteopati, vücudun kendi kendini iyileştirme yeteneğini destekleyen ve vücut bütünlüğünü koruyan bir tedavi yaklaşımıdır.",
    content: (
      <>
        <p>
          <b>Fonksiyonel egzersiz</b>, vücudun günlük yaşamda ihtiyaç duyduğu
          temel hareketleri desteklemek amacıyla tasarlanmış bir antrenman
          yaklaşımıdır. Fizyoterapistlerimiz egzersizlere başlamadan önce
          vücudunuzun ihtiyacı olan fonksiyonel hareketleri analiz ederek
          sizlere uygun bir egzersiz programı oluşturur. Bu egzersizler, kas
          gruplarını bir arada çalıştırarak denge, güç, esneklik ve
          koordinasyonu artırmayı hedefler. Fonksiyonel egzersizler, yürümek,
          eğilmek, kaldırmak gibi günlük hareketleri taklit ederek vücudu daha
          verimli çalışmaya hazırlar.
        </p>
        <p>
          Bu antrenman türü, sadece spor salonunda değil, hayatın her alanında
          güçlü ve esnek olmanızı sağlar. <b>Fonksiyonel egzersiz</b>, core
          (merkez) kaslarını güçlendirir, duruşu iyileştirir ve sakatlanma
          riskini azaltır. Özellikle hareket kabiliyetini artırmak isteyenler,
          spor performansını geliştirmek isteyenler veya yaralanmalardan
          korunmayı amaçlayanlar için idealdir.
        </p>
        <p>
          Fonksiyonel egzersizler, her yaş ve fitness seviyesindeki bireyler
          için uygundur. Egzersiz programları, kişisel hedeflere ve ihtiyaçlara
          göre uyarlanabilir, bu da onu herkes için erişilebilir kılar.
        </p>
        <p>
          <b>Fonksiyonel antrenman</b> ile günlük yaşamda daha güçlü, daha esnek
          ve daha dengeli bir vücut elde edebilirsiniz.
        </p>
      </>
    ),
    coverImage: "/img/blogs/fonksiyonelEgzersiz/fonksiyonel_egzersiz.webp",
    tags: ["Beslenme", "Danışmanlık", "Kişiye Özel"],
  },
  {
    id: 14,
    title: "Fonksiyonel Tıp / Eliminasyon Diyeti",
    slug: "fonksiyonelTip",
    author: "Fatma Çakıllı",
    publishedDate: "2024-10-14",
    excerpt:
      "Fonksiyonel tıp, hasta ve hastalıklara daha bütüncül bir bakış açısı ile tedaviyi benimseyen bir yaklaşımdır.",
    content: (
      <>
        <h3>Fonksiyonel Tıp/ Eliminasyon Diyeti</h3>
        <p>
          Fonksiyonel tıp, hasta ve hastalıklara daha bütüncül bir bakış açısı
          ile tedaviyi benimseyen bir yaklaşımdır. Bu yaklaşımda hastalıkların
          semptomlarının ortadan kaldırılması ile birlikte bu hastalıkların
          kökeni de araştırılır. Böylelikle sadece semptom ve şikayet değil bu
          semptom ve şikayetleri yaratan parçalar da sorgulanır, büyük resme
          bakılarak hastalığın tamamen ortadan kaldırılması hedeflenir.
        </p>
        <p>
          Fonksiyonel tıp, hastalıkları daha geniş bir bakış açısı ile ele alan
          bir tedavi yaklaşımıdır. Bu yöntem, yalnızca hastalıkların
          belirtilerini ortadan kaldırmayı değil, aynı zamanda bu belirtilerin
          kök nedenlerini de keşfetmeyi hedefler. Böylece, sadece mevcut
          şikayetler üzerinde durulmaz, aynı zamanda bu şikayetlere yol açan
          temel faktörler de araştırılır. Bu sayede hastalığın tamamen
          iyileştirilmesi amaçlanarak, kişinin genel sağlık durumunun kalıcı bir
          şekilde iyileştirilmesi hedeflenir.
        </p>
        <p>
          Fonksiyonel tıp beslenmesinin ise öncelikli amacı kişinin bağırsak
          florasını düzenlemek ve vücutta ikinci beyin olarak adlandırılan
          bağırsakların iyileştirilerek vücuttaki bağışıklık sistemini daha iyi
          bir hale getirilmesi amaçlamaktır.
        </p>
        <p>
          Bu diyet özellikle otoimmün hastalıklar, inflamatuar hastalıklar, gaz
          ve şişkinlik sorunları yaşayan kişilerin rahatsızlıklarından
          kurtarabilmek amacıyla yapılan özel bir diyet şeklidir.
        </p>
        <p>
          Adı diyet olarak geçse de aslında temel olarak kilo verdirme amacı
          taşımaz öncelikli amacı kişinin bağırsak florasını düzenlemek ve
          vücutta ikinci beyin olarak adlandırılan bağırsakların iyileştirilmesi
          hedeflenir.
        </p>
        <p>
          Bağırsaklardaki cevabı düzenlemek amacıyla potansiyel antijen olarak
          görülen besinleri kesmek esasına dayanır. Güzel bir yan etki olarak
          fazla kilolularda kilo kaybı da görülebilir. Genellikle fonksiyonel
          tıp eğitimi almış uzmanlar bir ekip çalışması içerisinde çalışır.
        </p>
      </>
    ),
    coverImage: " ",
    tags: ["Beslenme", "Danışmanlık", "Kişiye Özel"],
  },
  {
    id: 15,
    title: "Koşu",
    slug: "kosu",
    author: "Fatma Çakıllı",
    publishedDate: "2024-10-14",
    excerpt:
      "Koşu, genellikle basit bir egzersiz olarak görülse de, aslında vücudun birçok sisteminin bir arada çalışmasını gerektiren bir aktivitedir.",
    content: (
      <>
        <h1 className="text-xl font-semibold">
          Son Zamanların Revaçta Olan Egzersizi; Koşu
        </h1>
        <h4>Peki sizce herkes koşabilir mi?</h4>
        <p>
          Koşu, genellikle basit bir egzersiz olarak görülse de, aslında vücudun
          birçok sisteminin bir arada çalışmasını gerektiren bir aktivitedir. Bu
          sistemlerden herhangi birinde eksiklik bulunması, koşu sırasında
          yaralanmalara yol açabilir. Bu nedenle, koşu yaparken core gücünün
          önemi oldukça büyüktür.
        </p>
        <h5>Core Gücünün Koşu Üzerindeki Etkileri</h5>
        <p>
          Koşarken core gücünün yetersiz olması, omurganın stabilizasyonunu
          bozarak binen yükün dengesiz dağılmasına neden olabilir. Core gücü,
          pelvisin, kalçaların ve belin optimal ve akıcı bir şekilde birlikte
          çalışmasını sağlar. Bu, vücudunuzun daha az enerji harcamasına
          yardımcı olur ve koşu sırasında verimliliği artırır. Ayrıca, güçlü bir
          merkez, dengeyi önemli ölçüde artırır ve bu da küçük veya büyük yanlış
          adımlardan hızlı bir şekilde toparlanmanıza yardımcı olarak
          yaralanmaları önler.
          <br />
          <br />
          Bu nedenle eğer siz de koşuya yeni başlıyorsanız öncelikle vücudunuzun
          buna hazır olduğuna emin olun eğer değilseniz sizler için bir ipucu!
          <br />
          <br />
          30sn 1 dk arasında plankinizi bozmadan tutun ve bakın bakalım en
          azında core gücünüz vücudunuzu stabilize edebiliyor mu? Eğer bunu
          sağlayamıyorsanız koşu yerine daha basit egzersizlerle başlamanız
          sizin için daha güvenli olacaktır.
          <br />
          <br />
          Bunların yanında core gücünüz yeterli ve diğer parametrelere bakmak
          istiyorsanız sizler için birkaç ipucu daha;
        </p>
        <ul>
          <li>
            <b>Kademeli Başlangıç:</b> Koşuya yavaş yavaş başlamak, vücudunuzun
            adaptasyon sürecini destekler ve yaralanma riskini azaltır. İlk
            haftalarda koşu ve yürüyüşü birleştirmek, dayanıklılığınızı
            artırmanıza yardımcı olur. Bu, kaslarınızın ve eklemlerinizin
            koşunun gerektirdiği stresle başa çıkmasını sağlar.
          </li>
          <li>
            <b>Doğru Ayakkabı Seçimi:</b> Ayak yapınıza uygun bir koşu
            ayakkabısı seçmek, koşu sırasında oluşabilecek baskıları azaltarak
            yaralanmaları önler. Ayağınızın pronasyon seviyesi, destek ihtiyacı
            ve koşu zemini gibi faktörleri göz önünde bulundurarak doğru
            ayakkabıyı seçmek, performansınızı da olumlu etkiler.
          </li>
          <li>
            <b>Isınma ve Soğuma:</b> Koşuya başlamadan önce yapılan ısınma
            egzersizleri, kaslarınızı esnek hale getirir ve yaralanma riskini
            düşürür. Koşu sonrasında soğuma egzersizleri yaparak kaslarınızın
            rahatlamasını sağlamak, toparlanma sürecinizi hızlandırır.
          </li>
          <li>
            <b>Dengeli Antrenman ve Dinlenme:</b> Koşu programınızı haftada 3-4
            günle sınırlandırarak vücudunuza yeterli dinlenme süresi tanıyın.
            Dinlenme günleri, kaslarınızın toparlanmasına ve güçlenmesine olanak
            tanır, böylece aşırı antrenman kaynaklı yaralanmaların önüne
            geçersiniz.
          </li>
          <li>
            <b>Beslenme ve Hidrasyon:</b> Koşu öncesinde karbonhidrat açısından
            zengin, sindirimi kolay bir öğün tercih edin ve yeterli sıvı
            aldığınızdan emin olun. Koşu sırasında kaybedilen elektrolitleri
            yerine koymak, kas kramplarını önlemede yardımcı olur ve
            performansınızı artırır.
          </li>
          <li>
            <b>Doğru Koşu Tekniği:</b> Adımlarınızın çok uzun olmamasına,
            dizlerinizi hafif bükük tutmaya ve kollarınızı rahat bir şekilde
            sallamaya dikkat edin. Orta ayakla yere iniş yapmak, eklem ve
            kaslarınızdaki stresi azaltarak sakatlanma riskini en aza indirir.
          </li>
        </ul>
        <p>
          Özellikle koşuya yeni başlayanlar için öncelikle hızlı yürüyüşler daha
          sonra kısa kmli ve yavaş tempolu koşular daha uygundur. Bununla
          beraber vücudun eksik ve zayıf olan sistemlerini de kuvvetlendirmek
          önemlidir.
          <br />
        </p>
        <p>
          Koşuya başlamak, hem fiziksel hem de mental sağlık açısından birçok
          fayda sunar. Ancak yeni başlayanlar için bu süreç bazen zorlayıcı
          olabilir. Koşuya yeni adım atanlar için hazırladığımız bu ipuçları,
          hem motivasyonunuzu artırabilir hem de sağlıklı bir başlangıç
          yapmanıza yardımcı olabilir.
        </p>
      </>
    ),
    coverImage: "/img/blogs/kosu/fonksiyonel_egzersiz.webp",
    tags: ["Beslenme", "Danışmanlık", "Kişiye Özel"],
  },
  {
    id: 15,
    title: "Manuel Terapi",
    slug: "manuelTerapi",
    author: "Fatma Çakıllı",
    publishedDate: "2024-10-14",
    excerpt:
      "Manuel terapi, kas ve eklem sorunlarını ele almak ve hareket  kabiliyetini artırmak için kullanılan bir fizyoterapi tekniğidir.",
    content: (
      <>
        <p>
          Manuel terapi, kas ve eklem sorunlarını ele almak ve hareket
          kabiliyetini artırmak için kullanılan bir fizyoterapi tekniğidir. Bu
          tedavi yöntemi, uzman fizyoterapistler tarafından elle yapılan özel
          tekniklerle uygulanır ve aşağıdaki hizmetleri içerir:
        </p>
        <ul>
          <li>Kas ve eklem mobilizasyonları ve manipülasyonları</li>
          <li>Yumuşak Doku Masajı</li>
          <li>Postür ve Biomekanik Düzeltmeler</li>
          <li>Fonksiyonel Eğitim</li>
        </ul>
        <p>
          Manuel terapi, kişiye özel yaklaşımla, ağrı yönetimi ve fonksiyonel
          iyileşme konusunda etkili sonuçlar elde edilmesini sağlar.
          Sorunlarınızı detaylı bir şekilde değerlendirip, sizin için en uygun
          manuel terapi yöntemlerini belirlemek için bize başvurabilirsiniz.
        </p>

        <h2>Manuel Terapi Nedir,</h2>
        <h2>Kimler İçin Uygundur?</h2>
        <p>
          Manuel terapi, kas ve eklem sorunlarını ele almak ve hareket
          kabiliyetini artırmak için kullanılan bir fizyoterapi tekniğidir. Bu
          tedavi yöntemi, uzman fizyoterapistler tarafından elle ve/veya
          ekipmanlarla yapılan özel tekniklerle uygulanır. Ağrısı olan veya
          yaralanma geçirmiş herkes için güvenli yöntemlere bağlı kalarak
          uygulandığı için uygundur ve aşağıdaki hizmetleri içerir:
        </p>
        <br />
        <ul>
          <li>
            <b>Kas ve Eklem Mobilizasyonları/Manipülasyonları:</b> Kas
            gerilimini azaltmak ve eklem hareketliliğini artırmak için çeşitli
            teknikler kullanılır. Bu uygulamalar, ağrıyı hafifletir ve hareket
            aralığını genişletir.
          </li>
          <li>
            <b>Yumuşak Doku Masajı:</b> Kaslar, bağ dokuları ve diğer yumuşak
            dokular üzerinde uygulanan derinlemesine masaj teknikleri, kan
            dolaşımını artırır, gerginliği azaltır ve iyileşme sürecini
            hızlandırır.
          </li>
          <li>
            <b>Germe ve Mobilizasyon:</b> Eklemlerdeki hareket kısıtlamalarını
            gidermek ve kasları esnetmek için yapılan tekniklerdir. Bu
            uygulamalar, ağrı ve sertliği azaltarak hareket kabiliyetini
            iyileştirir.
          </li>
          <li>
            <b>Postür ve Biomekanik Düzeltmeler:</b> Duruş bozuklukları ve
            yanlış hareket alışkanlıklarının düzeltilmesine yönelik teknikler
            uygulanır. Bu, ağrıların önlenmesine ve genel fiziksel sağlığın
            iyileştirilmesine yardımcı olur.
          </li>
          <li>
            <b>Fonksiyonel Eğitim:</b> Günlük yaşam aktivitelerinde daha iyi bir
            hareket kabiliyeti sağlamak amacıyla özel egzersizler ve teknikler
            önerilir. Bu eğitim, tedavi sürecini destekler ve uzun vadeli
            iyileşmeye katkıda bulunur.
          </li>
        </ul>

        <p>
          Manuel terapi, kişiye özel yaklaşımla, ağrı yönetimi ve fonksiyonel
          iyileşme konusunda etkili sonuçlar elde edilmesini sağlar.
          Sorunlarınızı detaylı bir şekilde değerlendirip, sizin için en uygun
          manuel terapi yöntemlerini belirlemek için bize başvurabilirsiniz.
        </p>
      </>
    ),
    coverImage: "/img/blogs/manuelTerapi/manuelTerapi.webp",
    tags: ["Beslenme", "Danışmanlık", "Kişiye Özel"],
  },
  {
    id: 16,
    title: "Tinnitus (Kulak Çınlaması)",
    slug: "tinnus",
    author: "Fatma Çakıllı",
    publishedDate: "2024-10-14",
    excerpt:
      "Tinnitus ya da yaygın adıyla kulak çınlaması, kişilerin dış bir ses kaynağı olmadan kulaklarında çınlama, uğultu, ıslık veya vınlama gibi sesler duyması durumudur.",
    content: (
      <>
        <p>
          <b>Tinnitus</b> ya da yaygın adıyla <b>kulak çınlaması</b>, kişilerin
          dış bir ses kaynağı olmadan kulaklarında çınlama, uğultu, ıslık veya
          vınlama gibi sesler duyması durumudur. Tinnitus, tek bir kulakta ya da
          her iki kulakta birden hissedilebilir ve sürekli ya da aralıklı
          olabilir.
        </p>
        <h3>Tinnitus Neden Olur?</h3>
        <p>
          Tinnitus, bir hastalık olmaktan ziyade, farklı sağlık sorunlarının
          belirtisi olabilir. En yaygın nedenleri şunlardır:
        </p>
        <ul>
          <li>
            <b>Kulak İçi Hasarları:</b> İç kulakta bulunan tüy hücrelerinin
            zarar görmesi, beyne yanlış sinyaller göndermesine yol açabilir ve
            bu da çınlamaya neden olabilir.
          </li>
          <li>
            <b>Yüksek Gürültüye Maruz Kalma:</b> Yüksek sesli müzik, iş
            makineleri veya patlamalar gibi gürültüler, işitme kaybına ve
            tinnitus gelişimine neden olabilir.
          </li>
          <li>
            <b>Yaşa Bağlı İşitme Kaybı:</b> 60 yaşından sonra işitme duyusu
            zayıflar ve bu durum tinnitusun ortaya çıkmasını tetikleyebilir.
          </li>
          <li>
            <b>Kulak Enfeksiyonları ve Kulak Kirleri:</b> Kulak yolunun
            tıkanması ya da enfeksiyonlar, geçici veya kalıcı tinnitus
            yaratabilir.
          </li>
          <li>
            <b>Baş ve Boyun Yaralanmaları:</b> Bu tür yaralanmalar işitme
            yollarını ve sinir sistemini etkileyerek kulak çınlamasına neden
            olabilir.
          </li>
        </ul>
        <h4>Tinnitus Belirtileri Nelerdir?</h4>
        <p>Tinnitus, genellikle şu şekillerde ortaya çıkar:</p>
        <ul>
          <li>Kulakta sürekli ya da aralıklı çınlama</li>
          <li>Uğultu veya vızıltı gibi sesler</li>
          <li>Tek ya da iki kulakta hissedilen sesler</li>
          <li>
            Özellikle sessiz ortamlarda veya gece uyurken daha belirgin hale
            gelmesi
          </li>
        </ul>
        <h4>Tinnitus ve Fizyoterapi</h4>
        <p>
          Tinnitusun nedenleri oldukça karmaşıktır ve birçok farklı sistemle
          ilişkili olabilir. Özellikle fizyoterapi açısından,{" "}
          <b>üst boyun omurları</b> ve <b>çene eklemleri</b> bazı tinnitus
          vakalarında önemli rol oynayabilir. Ancak bu tür nedenlerin diğer
          etkenlere göre oldukça nadir olduğu unutulmamalıdır.
        </p>
        <h3>Boyun Omurları ve Tinnitus İlişkisi</h3>

        <p>
          Boyun omurları, özellikle üst servikal omurga bölgesi, bazı vakalarda
          kulak çınlamasına neden olabilir. Bu durum, genellikle boyun
          kaslarındaki gerilme, postüral bozukluklar veya boyun bölgesinde
          yaşanan travmalar sonucunda ortaya çıkar. Fizyoterapi, bu bölgede
          meydana gelen mekanik disfonksiyonları gidermeye yardımcı olabilir.
          Boyun omurlarının, çevresindeki sinir ve kas yapılarına baskı yaparak
          işitme yollarını etkilediği düşünülmektedir. Bu durum sonucunda kulak
          çınlaması ortaya çıkabilir.
        </p>
        <img
          src="/img/blogs/tinnus/Cene-kemigi-blog.webp"
          alt="Çene Kemiği"
          class="max-w-[500px] rounded-tr-3xl rounded-bl-3xl"
          loading="lazy"
        />
        <h3>Çene Eklemi (Temporomandibular Eklem) ve Tinnitus</h3>
        <p>
          Çene eklemi bozuklukları (TMJ), kulak bölgesine yakınlığı nedeniyle
          bazen tinnitus ile ilişkili olabilir. Çene eklemindeki yanlış
          hizalanma, çiğneme kaslarının aşırı gerilmesi veya travmalar, kulak
          çınlamasına katkıda bulunabilir. Fizyoterapistler, çene eklemi
          problemlerini tedavi ederek bu tür tinnitus vakalarında rahatlama
          sağlayabilirler.
        </p>
        <h3>Fizyoterapinin Tinnitus Üzerindeki Etkisi</h3>
        <p>
          Fizyoterapistler, detaylı bir değerlendirme ile kulak çınlamasına
          boyun ve çene ekleminin katkıda bulunup bulunmadığını belirleyebilir.
          Ancak bu vakalar, tinnitusun genel nedenlerine kıyasla çok daha az
          görülmektedir. <b>Boyun</b> ve <b>çene</b> manipülasyonları, yalnızca
          doğru şekilde teşhis edilmiş vakalarda etkili olabilir. Bu nedenle,
          fizyoterapi yöntemleriyle yüzde yüz çözüme ulaşmak zordur. Yine de,
          eğer diğer tüm nedenler elenmişse, uzmanlaşmış bir fizyoterapist bu
          bölgeleri tedavi ederek tinnitusun şiddetini azaltabilir.
        </p>
        <h4>Özetle</h4>
        <p>
          Tinnitusun üst boyun omurları veya çene eklemleri ile ilişkili olduğu
          durumlar nadir olsa da, bu bölgelerdeki mekanik problemler
          düzeltilerek bazı hastalarda çınlamanın hafifletilmesi mümkündür.
          Ancak, bu tedavi yaklaşımı için öncelikle kapsamlı bir değerlendirme
          yapılmalı ve diğer nedenler göz önünde bulundurulmalıdır.
        </p>
      </>
    ),
    coverImage: "/img/blogs/tinnus/Tinnus-blog.webp",
    tags: ["Beslenme", "Danışmanlık", "Kişiye Özel"],
  },
  {
    id: 17,
    title: "Diş Sıkma ve Çene Ekleminden Gelen Sesler",
    slug: "disSikmaVeCeneEklemindenGelenSesler",
    author: "Fatma Çakıllı",
    publishedDate: "2024-10-14",
    excerpt:
      "Çenenizden kütleme sesleri mi geliyor? Ya da sık sık diş sıkma (bruksizm) gibi sorunlarla mı karşılaşıyorsunuz? Çene eklemi problemleri, birçok insanın hayat alitesini etkileyen önemli sağlık sorunlarından biridir.",
    content: (
      <>
        <p>
          Çenenizden <b>kütleme sesleri</b> mi geliyor? Ya da sık sık{" "}
          <b>diş sıkma</b> (bruksizm) gibi sorunlarla mı karşılaşıyorsunuz? Çene
          eklemi problemleri, birçok insanın hayat kalitesini etkileyen önemli
          sağlık sorunlarından biridir. Bu yazımızda, çene eklemi anatomisini,
          diş sıkmanın nedenlerini ve tedavi yöntemlerini ele alacağız.
        </p>
        <img
          src="/img/blogs/disSikmaVeCeneEklemindenGelenSesler/dis-sikma.webp"
          alt="Çene Eklemi"
          class="article-content-image"
          loading="lazy"
        />
        <h3>Çene Ekleminden Gelen Sesler Neden Olur?</h3>
        <p>
          Çene ekleminde oluşan kütleme sesi, genellikle çene eklemindeki disk
          yapısının yerinden oynamasından kaynaklanır.
        </p>
        <h3>Çene Ekleminin Anatomisi</h3>
        <img
          src="/img/blogs/disSikmaVeCeneEklemindenGelenSesler/cene-anatomisi.webp"
          alt="Çene Anatomisi"
          class="article-content-image"
          loading="lazy"
        />
        <p>
          <b>Temporomandibular eklem (TME), </b>alt ve üst çenenin birleşiminde
          bulunan karmaşık bir yapıdır. Bu eklem, konuşma, yutkunma ve çiğneme
          gibi önemli fonksiyonları sağlar.
        </p>
        <p>
          Çene eklemi, hem üst çene hem de kafatasıyla bağlantı kuran özel bir
          yapıya sahiptir. <b>Eklem diski</b>, tıpkı dizlerimizdeki menisküs
          gibi, eklem yüzeyleri arasında yastık görevi görür. Eğer eklemde bir
          disfonksiyon (bozukluk) varsa, disk öne doğru kayabilir ve kütleme
          sesleri ortaya çıkabilir. Bu durum, eklemde ciddi bir sorun olduğunu
          göstermeyebilir; ancak beraberinde <b>diş sıkma</b>,{" "}
          <b>çene ağrısı</b> veya <b>yüz ağrısı</b> gibi şikayetler varsa, bir
          uzmana başvurmanız önerilir.
        </p>
        <h2>Çene Eklemi Dıştan Kesit</h2>
        <div className="flex w-40 gap-10">
          <img
            src="/img/blogs/disSikmaVeCeneEklemindenGelenSesler/cene-yandan.webp"
            alt="Yandan Çene Kasları"
            class="article-container-content-image"
            loading="lazy"
          />
          <img
            src="/img/blogs/disSikmaVeCeneEklemindenGelenSesler/cene-alt-ve-ust.webp"
            alt="Alt ve Üst Dil Kasları"
            class="article-container-content-image"
            loading="lazy"
          />
          <img
            src="/img/blogs/disSikmaVeCeneEklemindenGelenSesler/dis-dil-kaslar-ve-agiz-tabani.webp"
            alt="Dış Dil Kasları ve Ağız Tabani"
            class="article-container-content-image"
            loading="lazy"
          />
        </div>
        <h5>
          Çiğneme kasları – Yandan Alt ve Üst Resim : Dış Dil Kaslar ve Ağız
          Tabanı Kasları
        </h5>
        <p>
          Çene eklemi kemiklerin yanı sıra ligamentler, kapsüller, kas grupları,
          disk ve kapsüllerden oluşur.
          <br />
          Temporomandibular rahatsızlıklar; konuşma, çiğneme veya yutma
          esnasında ortaya çıkan istenmeyen sesler, eklem ve/veya kas ağrıları,
          ağız açma-kapatmada kısıtlılık, deviasyon veya defleksiyon gibi klinik
          işaretlerle karakterizedir. En sık gözlenen klinik bulgular; hareket
          kısıtlılığı, ağız açıklığında kısıtlılık, sabah uyandığında çenelerde
          ağrı ya da gerginlik, çiğneme kaslarında ağrı, baş ve boyuna yansıyan
          ağrılardır
        </p>
        <h3>Diş Sıkma (Bruksizm) ve Çene Problemleri</h3>
        <img
          src="/img/blogs/disSikmaVeCeneEklemindenGelenSesler/bruksizm.webp"
          alt="Bruksizm"
          class="article-content-image"
          loading="lazy"
        />
        <p>
          <b>Diş sıkma ve çene eklemi rahatsızlıkları</b>, genellikle çeşitli
          biyolojik, çevresel ve duygusal faktörlerin etkisiyle ortaya çıkar.
          Stres, bu rahatsızlıkların başlıca tetikleyicilerindendir. Günümüzde
          bu sorunlar, <b>multidisipliner bir yaklaşımla</b> ele alınmakta ve
          çeşitli uzmanların iş birliğiyle tedavi edilmektedir.
        </p>
        <h5>Diş Sıkmanın Nedenleri</h5>
        <p>
          Diş sıkmanın kesin nedeni tek bir faktöre bağlı değildir. İşte en
          yaygın nedenlerden bazıları:
        </p>
        <ul>
          <li>
            <b>Oklüzal Faktörler (Kapanış Bozuklukları)</b>: Yanlış kapanış,
            çene eklemi problemlerine neden olabilir. Farklı maloklüzyon
            tipleri, çene ekleminde rahatsızlıklara yol açabilir.
          </li>
          <li>
            <b>Travmalar</b>: Çeneye alınan darbe veya uzun süreli
            mikrotravmalar çene ekleminde fonksiyonel bozukluklara sebep
            olabilir.
          </li>
          <li>
            <b>Duygusal Stres</b>: Stres, kas tonusunu artırarak diş sıkma ve
            gıcırdatma gibi parafonksiyonel aktivitelerin gelişmesine neden
            olabilir. Bu da zamanla çene eklemi problemlerine yol açar.
          </li>
          <li>
            <b>Ağrı İmpulsları</b>: Diş ağrısı veya diğer kronik ağrı durumları,
            çene eklemine zarar verebilecek kas tepkilerine neden olabilir.
          </li>
          <li>
            <b>Parafonksiyonel Aktiviteler</b>: Diş sıkma, tırnak yeme veya
            kalem ısırma gibi alışkanlıklar da çene ekleminde sorunlara yol
            açabilir.
          </li>
        </ul>
        <h3>Diş Sıkma ve Çene Problemleri Nasıl Tedavi Edilir?</h3>
        <p>
          Diş sıkma ve çene eklemi problemlerinin tedavisi multidisipliner bir
          yaklaşımla ele alınmalıdır. Tedavi sürecinde diş hekimi,
          fizyoterapist, ortodontist ve hatta psikologlar bir arada çalışabilir.
        </p>
        <h5>Tedavi Yöntemleri:</h5>
        <ul>
          <li>
            <b>Diş Plağı (Gece Plağı)</b>: Diş sıkmanın neden olduğu hasarları
            azaltmak için gece plağı kullanımı önerilir.
          </li>
          <li>
            <b>Fizyoterapi</b>: Çene eklemine yönelik özel egzersizler ve manuel
            terapi yöntemleri uygulanabilir.
          </li>
          <li>
            <b>Psikolojik Destek</b>: Stres yönetimi için psikoterapi veya
            rahatlama teknikleri faydalı olabilir.
          </li>
          <li>
            <b>Cerrahi Müdahale</b>: Ağır vakalarda cerrahi seçenekler de
            değerlendirilebilir.
          </li>
        </ul>
        <h4>Sonuç</h4>
        <p>
          Diş sıkma ve çene problemleri, birçok faktörün bir araya gelmesiyle
          ortaya çıkabilir ve tedavisi multidisipliner bir yaklaşım gerektirir.
          Eğer diş sıkma, çene kütlemesi ve ağrı gibi belirtiler yaşıyorsanız,
          mutlaka bir uzmana danışın. Erken teşhis ve tedavi, bu sorunların
          ilerlemesini engelleyebilir ve yaşam kalitenizi artırabilir.
        </p>
        <h6>Sıkça Sorulan Sorular</h6>
        <ul>
          <li>
            <b>Diş sıkma neden olur?</b>
            <br />
            Diş sıkmanın en yaygın nedenleri arasında stres, kapanış
            bozuklukları ve travmalar yer alır.
          </li>
          <li>
            <b>Çene ekleminden gelen sesler tehlikeli midir?</b>
            <br />
            Çene ekleminden gelen kütleme sesi her zaman tehlikeli olmayabilir.
            Ancak ağrı, diş sıkma ve yüz ağrısı gibi semptomlar eşlik ediyorsa
            bir uzmanla görüşmek gerekir.
          </li>
          <li>
            <b>Diş sıkma nasıl tedavi edilir?</b>
            <br />
            Tedavi yöntemleri arasında gece plağı, fizyoterapi, psikolojik
            destek ve cerrahi müdahaleler yer alabilir
          </li>
        </ul>
      </>
    ),
    coverImage:
      "/img/blogs/disSikmaVeCeneEklemindenGelenSesler/cene-alt-ve-ust.webp",
    tags: ["Beslenme", "Danışmanlık", "Kişiye Özel"],
  },
  {
    id: 18,
    title: "Omurga Ağrısının Evrimsel Kökenleri",
    slug: "omurgaAgrisi",
    author: "Fatma Çakıllı",
    publishedDate: "2024-10-14",
    excerpt:
      "Beliniz, sırtınız ya da boynunuz sık sık ağrıyor mu? Omurga ağrılarının evrimsel kökenleri hakkında bilgi sahibi olmak, bu yaygın problemleri daha iyi anlamanıza yardımcı olabilir.",
    content: (
      <>
        <h1 className="text-2xl font-semibold">
          Omurga Ağrısının Evrimsel Kökenleri: Bel, Sırt ve Boyun Ağrısına Dair
          Bir Bakış
        </h1>
        <p>
          Beliniz, sırtınız ya da boynunuz sık sık ağrıyor mu? Omurga
          ağrılarının evrimsel kökenleri hakkında bilgi sahibi olmak, bu yaygın
          problemleri daha iyi anlamanıza yardımcı olabilir. Omurga ağrıları,
          insanlık tarihinin büyük bir kısmını etkileyen önemli sağlık sorunları
          arasında yer alır.
        </p>
        <h1 className="text-xl font-semibold">
          Omurga Ağrısının Evrimsel Temeli
        </h1>
        <p>
          Tıpkı hayvanlarda görülen bazı türlere özgü sağlık sorunları gibi,
          insanlar da (Homo sapiens) kendilerine has omurga problemleriyle karşı
          karşıyadır. Örneğin, Scottish Fold cinsi kedilerin eklem problemleri
          ya da Alman kurtlarının kalça çıkıklığına yatkın olması gibi, biz Homo
          sapiensler de omurga ağrısı, bel ağrısı ve sırt ağrısı gibi sorunlarla
          uğraşırız.
        </p>
        <img
          src="/img/blogs/omurgaAgrisi/beyaz-kedi.webp"
          alt="Kedi"
          class="article-content-image"
          loading="lazy"
        />
        <p>
          Atalarımız olan primatlar, dört ayak üstünde hareket ediyordu ve bu
          nedenle omurgaları "C" şekline sahipti. Ancak Homo sapiens'in iki
          ayağa kalkmasıyla birlikte omurgamız "S" şeklini aldı. Homo sapiense
          darbeyi vuran en büyük değişiklik yalnızca ayağa kalkması değil hayat
          stillerininde zamanla oldukça değişmesiydi. Atalarımız hayatta
          kalabilmek için çok hareketli bir yaşam sürmekteyken çoğumuz hayatta
          kalabilmek ve para kazanabilmek için saatlerimizi otururak geçirmek
          durumda kalıyoruz. Bütün bu değişiklikere uyum sağlayamayan vücudumuz
          ise sık sık ağrı ve problemlerle bize uyarılar veriyor. Peki bir anda
          hayat stilimizi kökten değiştiremeyeceğimize göre ne yapabiliriz?
        </p>
        <img
          src="/img/blogs/omurgaAgrisi/omurga-ilk-insan.webp"
          alt="İlk İnsan"
          class="article-content-image"
          loading="lazy"
        />
        <h4>Bel, Sırt ve Boyun Ağrısını Azaltmak Mümkün</h4>
        <p>
          Omurga ağrısını hafifletmek ve daha sağlıklı bir yaşam sürmek için
          atabileceğiniz birkaç temel adım var. Hayatınıza Hareketi katmak,
          düzenli egzersiz yapmak ve size uygun bir beslenme programı
          oluşturmak, bel ve sırt ağrılarını önlemekte etkili yöntemlerdir. Aynı
          zamanda doğru postür ve ergonomik çözümler de bu ağrıları azaltmada
          önemli rol oynar.
        </p>
        <img
          src="/img/blogs/omurgaAgrisi/omurga-kosu.webp"
          alt="Koşu"
          class="article-content-image"
          loading="lazy"
        />
      </>
    ),
    coverImage: "/img/blogs/omurgaAgrisi/omurga-agrisi.webp",
    tags: ["Beslenme", "Danışmanlık", "Kişiye Özel"],
  },
  {
    id: 19,
    title: "Her Baş Ağrısı Migren Değildir",
    slug: "migren",
    author: "Fatma Çakıllı",
    publishedDate: "2024-10-14",
    excerpt:
      "Baş ağrısı, birçok kişinin yaşam kalitesini olumsuz etkileyen yaygın bir sorundur.",
    content: (
      <>
        <p>
          Baş ağrısı, birçok kişinin yaşam kalitesini olumsuz etkileyen yaygın
          bir sorundur. Ancak her baş ağrısı migren değildir. Peki, migreni
          diğer baş ağrılarından nasıl ayırt edebiliriz? Bu blog yazısında, baş
          ağrısının farklı türlerini ve migren ile diğer baş ağrıları arasındaki
          farkları bilimsel bir yaklaşımla inceleyeceğiz.
        </p>
        <h3>Migren Nedir?</h3>
        <p>
          <b>Migren</b>, nörolojik bir hastalık olup genellikle başın bir
          tarafında zonklayıcı, orta ya da şiddetli ağrıya neden olur. Migren,
          ışığa ve sese hassasiyet, mide bulantısı ve kusma gibi semptomlarla da
          kendini gösterebilir. Migren atağı, birkaç saatten birkaç güne kadar
          sürebilir ve kişilerin günlük yaşamlarını ciddi şekilde etkileyebilir.
        </p>
        <p>
          Migrenin sebepleri arasında genetik yatkınlık, hormonal değişiklikler,
          stres, uyku düzenindeki bozukluklar ve bazı yiyecekler yer alır.
          Ayrıca migren, genellikle auralı veya aurasız olarak ikiye ayrılır.
          Auralı migrende, ağrı başlamadan önce göz önünde ışık çakmaları veya
          görme bozuklukları gibi sinyaller ortaya çıkar.
        </p>
        <h4>Migrenin Görülme Sıklığı</h4>
        <p>
          Dünya Sağlık Örgütü 2015 verilerine göre migren özürlülüğe yol açan
          tüm hastalıklar içerisinde 7. sırada yer almaktadır. Ülkemizde migren
          prevalansı olarak iyi yapılandırılmış epidemiyolojik çalışmalarda
          kesin migren tanılı olguların sıklığı % 16.4, kronik migren sıklığı
          ise % 1.8 olarak bildirilmiştir
        </p>
        <h4>Baş Ağrısı Türleri</h4>
        <p>
          Her baş ağrısının migren olmadığını bilmek önemlidir. Baş ağrıları,
          farklı türlerde olabilir ve migren dışındaki yaygın baş ağrısı türleri
          şunlardır:
        </p>
        <ul>
          <li>
            <b>Gerilim Tipi Baş Ağrısı</b>: En yaygın baş ağrısı türlerinden
            biridir. Genellikle başın etrafında bir baskı veya sıkışma hissi ile
            karakterizedir. Bu ağrılar hafif ya da orta şiddetlidir ve stres,
            yorgunluk ya da kötü duruş gibi sebeplerle tetiklenebilir.
          </li>
          <li>
            <b>Küme Baş Ağrısı</b>: Küme baş ağrıları, çok şiddetli olup
            genellikle başın bir tarafında göz çevresinde yoğunlaşır. Bu ağrılar
            genellikle kısa süreli olup, birkaç hafta ya da ay boyunca tekrar
            edebilir. Küme baş ağrıları, migrene göre çok daha nadir görülür ve
            uykusuzluk, alkol ya da mevsimsel değişiklikler tarafından
            tetiklenebilir.
          </li>
          <li>
            <b>Sinüzit Baş Ağrısı</b>: Sinüslerin iltihaplanması sonucunda
            oluşan bu baş ağrıları, genellikle alın ve yanaklarda yoğunlaşır.
            Sinüzit baş ağrısı, genellikle burun tıkanıklığı, ateş ve yüzün
            hassasiyeti gibi belirtilerle birlikte ortaya çıkar.
          </li>
        </ul>
        <div className="flex justify-center">
          <img
            src="/img/blogs/migren/migren-noktaları.webp"
            alt="Migren Kısımları"
            class="w-[400px]"
            loading="lazy"
          />
        </div>
        <h4>Migren ve Diğer Baş Ağrılarının Farkları</h4>
        <p>
          Migreni diğer baş ağrılarından ayıran temel özellik, genellikle bir
          tarafta hissedilen(bazen çift taraflı) şiddetli zonklayıcı ağrılar ve
          eşlik eden nörolojik semptomlardır. Genellikle migrende boyun
          hareketlerinde kısıtlılık yoktur. Ağrı diğer bölgelere yayılmaz ve
          ataklar şeklinde daha uzun sürelerle oluşur. Diğer baş ağrıları
          genellikle daha hafif ve yaygın olabilir. Ayrıca migren, ışık ve ses
          hassasiyeti, mide bulantısı gibi belirgin semptomlarla birlikte
          gelirken, diğer tip baş ağrıları genellikle bu semptomlarla birlikte
          olmaz.Buna ek olarak servikojenik baş ağrısında boyun hareketlerinde
          kısıtlılık görülebilir ve baş ağrısı sık sıktır. Boyunla bağlantılı
          olarak ağrı tetiklenir ve ağrı alın, göz ve kollar gibi başka
          bölgelere yayılabilir.
        </p>
        <h4>Baş Ağrılarının Tedavisi</h4>
        <p>
          Baş ağrısı tedavisi, altta yatan nedene göre değişir. Migren
          tedavisinde, ağrı kesiciler, triptanlar ve nöromodülasyon cihazları
          kullanılabilir. Ayrıca migreni tetikleyen faktörlerin tespit edilip
          bunlardan kaçınılması da önemlidir. Gerilim tipi baş ağrılarında ise
          genellikle basit ağrı kesiciler ve gevşeme teknikleri etkili olur.
          Küme baş ağrılarında oksijen tedavisi ve bazı ilaçlar
          kullanılabilirken, sinüzit baş ağrılarında antibiyotikler ve
          dekonjestanlar gerekebilir. Bir anda ve şiddetli baş ağrısı
          yaşıyorsanız her şeyden önce mutlaka doktora başvurunuz!
        </p>
        <h4>Sonuç</h4>
        <p>
          Her baş ağrısı migren değildir, bu nedenle baş ağrısının türünü
          belirlemek ve ona göre bir tedavi planı uygulamak önemlidir. Eğer sık
          sık baş ağrısı çekiyorsanız, bir uzmana danışarak doğru teşhisi almak,
          yaşam kalitenizi artırmak açısından kritik olabilir.
        </p>
      </>
    ),
    coverImage: "/img/blogs/migren/migren.webp",
    tags: ["Beslenme", "Danışmanlık", "Kişiye Özel"],
  },
  {
    id: 19,
    title: "Fibromiyaljiniz Olabilir Mi?",
    slug: "fibromiyalji",
    author: "Fatma Çakıllı",
    publishedDate: "2024-10-14",
    excerpt:
      "Fiibromiyalji yaygın ağrı kronik yorgunluk uyku bozuklukları ve bilişsel semptomplar gibi çeşitli semptomların eşlik ettiği bir rahatsızlıktır.",
    content: (
      <>
        <p>
          Fiibromiyalji yaygın ağrı kronik yorgunluk uyku bozuklukları ve
          bilişsel semptomplar gibi çeşitli semptomların eşlik ettiği bir
          rahatsızlıktır. Aynı zamanda kronik ve yaygın kas iskelet ağrısıyla
          karakterizedir. Genel popülasyonda %2 oranında görülür. Özellikle orta
          yaşlı kadınlarda daha sık görülmekte olup, 20–55 yaş arası kadınlarda
          kas-iskelet sistemi ağrısının en sık nedenidir. Semptomların şiddeti,
          hastalığın seyri sırasında önemli ölçüde değişebilir. Genellikle ağrı
          başlangıçta lokalizedir, ancak ilerleyen zamanlarda birçok kas grubunu
          etkiler Birçok sistemi etkilediği için ve nedeni hala tam olarak
          bilinmediğinden hem hasta hem de doktor tarafından teşhisi oldukça
          karmaşıktır.
        </p>
        <p>
          Yapılan son çalışmalara göre belirlenen güncel 3 tanı kriteri
          şunlardır
        </p>
        <ul>
          <li>
            Son 3 veya fazlası aydır 5 vücut bölgesinden 4ünde ağrı olması
          </li>
          <li>Yaygın ağrı endeksinde 7 ve üzeri puan</li>
          <li>Semptom şiddet ölçeğinde 5 ve üzer, puan almak</li>
        </ul>
        <p>Bu 3 kriterin 3nün de olması fibromiyalji tanısı için gereklidir.</p>
        <ul>
          <li>
            <b>Yaygın Ağrı Skalası (YAS)</b>: Yaygın ağrı, aşağıdaki 5 bölgeden
            en az 4’ünde ağrının olmasıdır; çene, göğüs ve karın ağrısı tek
            başına yaygın ağrı grubunda sayılmamaktadır. Aşağıdaki her bölge
            için, son yedi gün içinde devamlı ağrı hissedilen bölgeler
            işaretlenir. Skor 0 ile 19 arasında olmaktadır.
            <img
              src="/img/blogs/fibromiyalji/agri-skalasi-1.webp"
              alt="Ağrı Skalası"
              class="article-content-image"
              loading="lazy"
            />
          </li>
          <li>
            <b>Semptom Şiddet Skalası (SŞS)</b>: Semptom Şiddet Skalası A ve B
            olmak üzere iki grupta değerlendirilerek bu maddelerden alınan
            toplam skor hesaplanır. A grubunda son 1 hafta içerisindeki
            yorgunluk, dinlenmeden uyanma, bilişsel bulgular ve somatik
            semptomları içeren tüm maddeler 0-3 arasında puanlandırılmaktadır
            (maksimum skor: 9). B grubunda ise son 6 ay içerisindeki baş ağrısı,
            alt karında ağrı-kramplar, depresyonun varlığı değerlendirilir
            (maksimum skor: 3) Sonuç olarak SŞS'nin maksimum skoru 12 olur.
            <div className="flex m-5 w-[400px] gap-5">
              <img
                src="/img/blogs/fibromiyalji/agri-skalasi-2.webp"
                alt="Ağrı Skalası"
                class="article-content-image"
                loading="lazy"
              />
              <img
                src="/img/blogs/fibromiyalji/agri-skalasi-3.webp"
                alt="Ağrı Skalası"
                class="article-content-image"
                loading="lazy"
              />
            </div>
          </li>
        </ul>
        <h4>Tedavi Süreci</h4>
        <p>
          Günümüzde fibromiyaljiyi tamamen iyileştiren bir tedavi yoktur.
          Tedavi, semptomların hafifletilmesi ve yaşam kalitesinin artırılmasına
          odaklanmaktadır. Klinik uygulamalarda, ilaç tedavileri, fizik tedavi,
          egzersiz ve bilişsel-davranışsal terapiler gibi çeşitli ilaç dışı
          yöntemler bir arada kullanılır. Fibromiyalji, sistemik bir hastalık
          olarak ele alındığı için tek bir tedavi yöntemi genellikle yeterli
          olmamakta; multidisipliner yaklaşımların en etkili tedavi biçimi
          olduğu düşünülmektedir.
        </p>
        <img
          src="/img/blogs/fibromiyalji/tedavi-sureci.webp"
          alt="Tedavi Süreci"
          class="article-content-image"
          loading="lazy"
        />
        <h5>İlaç Dışı Tedaviler</h5>
        <p>
          Fibromiyalji tedavisinde ilaçların etkisi sınırlıdır ve bu nedenle
          hastaların çoğunluğu ilaç dışı yöntemleri tercih etmektedir. Bu
          tedavilerin amacı, hastanın fiziksel işlevlerini ve aktivite düzeyini
          artırmak, genel sağlık durumunu ve duygusal iyilik halini
          iyileştirmektir. İlaç dışı tedavi yöntemleri arasında eğitim,
          egzersiz, fizik tedavi ve bilişsel-davranışsal terapi yer almaktadır.
        </p>
        <img
          src="/img/blogs/fibromiyalji/fibromiyalji-egzersiz.webp"
          alt="Fibromiyalji Egzersiz"
          class="article-content-image"
          loading="lazy"
          data-action="zoom"
        />
        <h4>Egzersiz</h4>
        <p>
          Egzersizin temel hedefleri arasında stresin azaltılması, kas gücü ve
          dayanıklılığının artırılması, ayrıca uygun postürün sağlanması
          bulunmaktadır. Fibromiyalji hastalarında kas gücü ve kondisyonun
          azaldığı gözlemlenmiştir. Bu durum, kasların mikrotravmalara daha
          duyarlı hale gelmesine neden olarak ağrı ve yorgunluk yaratmakta ve
          bir kısır döngü oluşmaktadır. Egzersiz, bu döngüyü kırmayı
          amaçlamaktadır.
        </p>
        <p>
          Bu noktada, pilates derin kas gruplarına odaklanarak omurgayı
          desteklemede önemli bir rol oynarken, yoga stresin azaltılmasında
          faydalıdır. Ağrı kontrol altına alındıktan sonra, direnç
          egzersizleriyle süreç desteklenerek bireyin güçlenmesi ve
          dayanıklılığının artırılması hedeflenir. Bunun yanısıra aerobik
          egzersizlerin programa dahil edilerek sinir sisteminin regüle edilmesi
          tedavi için son derece kritik rol oynamaktır.
        </p>
        <h4>Özet</h4>
        <p>
          Özetle, fibromiyaljinin nedeni ve patofizyolojisi henüz tam olarak
          anlaşılamamıştır. Ancak, birçok sistemin etkili olduğu konusunda güçlü
          bir görüş birliği bulunmaktadır. Bu nedenle, fibromiyalji tedavisinin
          multidisipliner bir yaklaşım gerektirdiği vurgulanmaktadır.{" "}
          <a href="https://algoloji.org.tr/wp-content/uploads/2021/01/Bulten-2020-2.pdf">
            Ek olarak...
          </a>
        </p>
      </>
    ),
    coverImage: "/img/blogs/fibromiyalji/fibromiyalji-egzersiz.webp",
    tags: ["Beslenme", "Danışmanlık", "Kişiye Özel"],
  },
  {
    id: 19,
    title: "Vestibüler Rehabilitasyon",
    slug: "vestibülerRehabilitasyon",
    author: "Fatma Çakıllı",
    publishedDate: "2024-10-14",
    excerpt:
      "Günümüzde birçok kişi yanlış tanıdan dolayı vestibüler rehabilitasyon alamamaktadır. Tanı koymanın zorluğu ve bu alanda çalışan yeterli uzman olmaması bu durumu daha da zorlaştırmaktadır.",
    content: (
      <>
        <p>
          Günümüzde birçok kişi yanlış tanıdan dolayı vestibüler rehabilitasyon
          alamamaktadır. Tanı koymanın zorluğu ve bu alanda çalışan yeterli
          uzman olmaması bu durumu daha da zorlaştırmaktadır.
        </p>
        <p>
          Vestibüler sistem, vücudun denge ve baş pozisyonu ile ilgili bilgileri
          işleyen, iç kulakta bulunan bir duyusal sistemdir. Bu sistem, başın
          hareketlerini algılayarak vücudun pozisyonunu ve hareketini kontrol
          etmesine yardımcı olur. Vestibüler sistem, iç kulakta bulunan vestibül
          organı, yarım daire kanalları ve bu organlardan gelen sinyalleri
          beyine ileten sinirler aracılığıyla çalışır. Bu sayede, dengeyi
          sağlamak, vücut koordinasyonunu düzenlemek ve uzayda hareket ederken
          yönelim sağlamak mümkün olur. Vestibüler sistemin düzgün çalışmaması,
          baş dönmesi, denge kaybı veya hareket hastalığı gibi sorunlara yol
          açabilir.
        </p>
        <img
          src="/img/blogs/vestibülerRehabilitasyon/Vestibüler2.webp"
          alt="Vestibüler2"
          class="article-content-image"
          loading="lazy"
        />
        <h3>Tanı Koymanın Zorlukları</h3>
        <ul>
          <li>
            <b>Karmaşık Semptomlar</b>: Baş dönmesi, dengesizlik, bulantı gibi
            belirtiler vestibüler sistemin yanı sıra başka sağlık sorunlarıyla
            da ilişkilendirilebilir (örneğin, migren, ortopedik problemler,
            sinir sistemi hastalıkları).
          </li>
          <li>
            <b>Multidisipliner Yaklaşım Gerekliliği</b>: Vestibüler
            bozuklukların doğru tanısı için KBB uzmanı, nörolog ve
            fizyoterapistin iş birliği gerekebilir.
          </li>
          <li>
            <b>Yetersiz Farkındalık</b>: Hem sağlık profesyonelleri hem de halk
            arasında vestibüler rehabilitasyonun önemi tam olarak bilinmiyor.
          </li>
          <li>
            <b>Tanı Araçlarının Kullanımı</b>: Video nistagmografi (VNG),
            kalorik test, posturografi gibi tanı araçlarının yaygın olmaması
            veya erişimin kısıtlı olması.
          </li>
          <li>
            <b>Psikolojik Etkenler</b>: Vestibüler bozukluklar sıklıkla kaygı ve
            depresyon gibi psikolojik durumlarla karıştırılabilir.
          </li>
        </ul>
        <h4>Vestibüler Rehabilitasyon</h4>
        <p>
          Baş dönmesi, dengesizlik ve diğer vestibüler sistem (iç kulak)
          kaynaklı sorunların tedavisi için özel olarak tasarlanmış bir
          fizyoterapi yöntemidir. Vestibüler sistem, dengemizi ve uzaysal
          farkındalığımızı kontrol eden bir yapıdır ve iç kulak ile beyin
          arasındaki bağlantılar üzerinden çalışır.
        </p>
        <h4>Tedavinin Kullanıldığı Alanlar;</h4>
        <ul>
          <li>
            <b>Nöritis vestibularis/labirentit</b>
          </li>
          <li>
            <b>Toksik İlaçlar</b>
          </li>
          <li>
            <b>Akustik Nöroma</b>
          </li>
          <li>
            <b>Travma</b>
          </li>
          <li>
            <b>Meniere Hastalığı</b>
          </li>
          <li>
            <b>Yaşa Bağlı</b>
          </li>
          <li>
            <b>İdiyopatik (nedeni bilinmeyen)</b>
          </li>
          <li>
            <b>Benign Paroksismal Vestibüler Vertigo(BPVV);</b>
            <img
              src="/img/blogs/vestibülerRehabilitasyon/Vestibüler3.webp"
              alt="Vestibüler3"
              class="article-content-image"
              loading="lazy"
            />
            <p>
              Vertigo şeklinde baş dönmesi, kulaktaki kristallerin hareketle
              yanlış yere gitmesi nedeniyle açığa çıkar.
            </p>
          </li>
          <li>
            <b>Vestibüler Migren;</b>
            <p>
              Sallanma hissi ile gelen baş dönmesi ve migren tetikleyicileriyle
              atak olarak açığa çıkar,5 dk ila 72 saate kadar ataklar devam
              edebilir.
            </p>
          </li>
          <li>
            <b>Meniere Hastalığı;</b>
            <img
              src="/img/blogs/vestibülerRehabilitasyon/Vestibüler4.webp"
              alt="Vestibüler4"
              class="article-content-image"
              loading="lazy"
            />
            <p>
              Endolenf sıvısının hacminde artış;şişme,zarın yırtılmasına neden
              olarak endolenf ve perilenf sıvısının karışmasına yol açar.
              20dk-23 saat aası süren 3 veya daha fazla vertigo atağı ile
              seyreder. İşitme kaybı, basınç hissi ve/veya kulak çınlaması eşlik
              edebilir. Hastaların %79 10 yıl sonra baş dönmesi ataklarından
              kurtulur. Tedavisinde vestibüler rehabilitasyonun yeri yoktur.
            </p>
          </li>
          <li>
            <b>Persistent Perceptual Postural Dizziness;</b>
            <p>
              Genellikle hastanın geçirilmiş bir baş dönmesi veya patoloji
              hikayesi vardır. İyileşme olsa bile hasta o zamanın korkusu ve
              endişesi ile kendini daha çok gözlemleyip aslında olmayan
              semptomlar bulmaya yatkındır. Herhangi bir harekete bağlı olmayan
              sürekli bir baş dönmesi yaşar. Dikkati sallanmaya vermediği
              durumlarda daha iyidir. Başka hastalıklarla da birlikte
              seyredebilir.
            </p>
          </li>
        </ul>
        <h3>Tedavi Yöntemleri</h3>
        <h4>
          Vestibüler rehabilitasyon programı kişiye özeldir ve şunları
          içerebilir:
        </h4>
        <ul>
          <li>
            <b>Göz ve baş koordinasyon;</b>
            <img
              src="/img/blogs/vestibülerRehabilitasyon/Vestibüler5.webp"
              alt="Vestibüler5"
              class="article-content-image"
              loading="lazy"
            />
            <p>
              Bakış-stabilizasyon egzersizleri gibi baş hareketleri sırasında
              gözlerin bir hedefe odaklanmasını öğretir. Haftada 1 fizyoterapist
              randevusundan sonra hasta eğitimi ile beraber hastanın her gün
              evde 3-5 kez toplam 20dk yapması önerilir.
            </p>
          </li>
          <li>
            <b>Denge Egzersizleri;</b>
            <p>
              Duruş, yürüme ve ağırlık transferi üzerinde çalışarak gözler
              kapalı olarak dengeyi iyileştirir. Haftada 1 fizyoterapist
              eşliğinde tedaviden sonra hasta eğitimi ile beraber 4-6 hafta
              boyunca günde bir kez toplam 20dk yapması önerilir.
            </p>
          </li>
          <li>
            <b>Duyusal Entegrasyon;</b>
            <img
              src="/img/blogs/vestibülerRehabilitasyon/Vestibüler6.webp"
              alt="Vestibüler6"
              class="article-content-image"
              loading="lazy"
            />
            <p>
              Yanlış kompanzasyonları düzeltebilmek amaçlı gözler kapalı
              egzersizlerdir
            </p>
          </li>
          <li>
            <b>Fonksiyonel Yürüme Egzersizleri;</b>
            <img
              src="/img/blogs/vestibülerRehabilitasyon/Vestibüler7.webp"
              alt="Vestibüler7"
              class="article-content-image"
              loading="lazy"
            />
            <p>
              Günlük hayatınızda vücut ve baş hareketlerinizle beraber dengenizi
              iyileştirmek için yapılan modifiye egzersizler.
            </p>
          </li>
          <li>
            <b>Habituasyon/Alışkanlık Egzersizleri;</b>
            <img
              src="/img/blogs/vestibülerRehabilitasyon/Vestibüler8.webp"
              alt="Vestibüler8"
              class="article-content-image"
              loading="lazy"
            />
            <p>
              Migren tetikleyecileri bulup yavaş yavaş maruz bırakarak yaşanılan
              rahatsızlığı azaltmayı hedefler.
            </p>
          </li>
          <li>
            <b>Pozisyonel manevralar;</b>
            <img
              src="/img/blogs/vestibülerRehabilitasyon/Vestibüler9.webp"
              alt="Vestibüler9"
              class="article-content-image"
              loading="lazy"
            />
            <p>
              Benign Pozisyonel Vestibüler Vertigo(BPVV) gibi durumlarda
              kristallerin doğru pozisyona dönmesini sağlamak için (örneğin,
              Epley manevrası).
            </p>
          </li>
          <li>
            <b>Aerobik ve genel kuvvetlendirme egzersizleri;</b>
            <p>
              Genel vücut sağlığını ve dayanıklılığı artırır. Özellikle migren
              ataklarında işe yaradığına dair kanıtlar vardır. Öneri; 40 dk,
              haftada 3 kez.
            </p>
          </li>
        </ul>
        <p>
          Vestibüler rehabilitasyon, düzenli uygulandığında semptomları önemli
          ölçüde azaltabilir, yaşam kalitesini artırabilir ve günlük hayatta
          daha rahat hareket etmenizi sağlayabilir.Eğer baş dönmesi,dengesizlik
          gibi semptomlarını var ise nöro-otoloğa başvurunuz. Daha sonrasında bu
          konuda uzman oan fizyoterapistler ile vestibüler tedaviye başlayınız.
        </p>
      </>
    ),
    coverImage: "/img/blogs/vestibülerRehabilitasyon/Vestibüler1.webp",
    tags: ["Beslenme", "Danışmanlık", "Kişiye Özel"],
  },
];

export default blogsData;
