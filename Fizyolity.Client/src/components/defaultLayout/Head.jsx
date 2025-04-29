import { Helmet } from "@dr.pogodin/react-helmet";

export default function Head({
  title,
  description = "Herkes ve Her Şey için Yetenek.",
  keywords = "fizyoterapi, rehabilitasyon, sağlık, fizyolity, manuel terapi, manipülasyon, egzersiz , pilates, reformer pilates,yoga , yoga terapi ,swing yoga , bel ağrısı , boyun ağrısı, sırt ağrısı , duruş bozuklukları , postür eğitimi, sağlıkllı yaşam, yoga kampı, nefes egzersizleri , çene ağrısı, kulak çınlaması , baş ağrısı,migren, osteopati , fonksiyonel egzersiz, tedavi egzersizleri , terapötik egzersiz , düz taban, kalça ağrısı , post operatif tedavi , bel fıtığı, boyun fıtığı , siyatik ağrısı , hamilelikte egzersiz, hamile pilatesi , hamile yogası, yüz yogası , diyafram egzersileri, eklem ağrıları, fibromiyalji, karpal tünel, tenisçi dirseği , recovery seans , sporcu fizyoterapisi , spor spesifik egzersizler, kronik ağrı, koşucu sağlığı , omuz ağrısı, streching, esneme egzersizleri, mobilite, nörolojik rehabilitasyon, pelvik taban , priformis sendromu, elde karıncalanma, sinir sıkışması, pcosda beslenme",
  canonical = "https://fizyolity.com.tr",
  jsonLd = null,
}) {
  return (
    <Helmet>
      <title>{title ? `${title} - Fizyolity` : `Fizyolity`}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonical} />

      {/* Responsive meta */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* Open Graph (Sosyal Medya için) */}
      <meta property="og:title" content={title || "Fizyolity"} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:site_name" content="Fizyolity" />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
    </Helmet>
  );
}
