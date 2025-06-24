import { Avatar, Center, Container, Text, Grid, Stack } from "@mantine/core";
import PageTransition from "../animations/PageTransition";
import DrMustafaKhattab from "../assets/scholars/DrMustafaKhattab.jpg";
import ShSaedFoudeh from "../assets/scholars/ShSaedFoudeh.png";
import Bouti from "../assets/scholars/Bouti.jpg";
import ShamsTameez from "../assets/scholars/ShamsTameez .jpg";
import AHM from "../assets/scholars/ahm.jpg";
import HamzaYusuf from "../assets/scholars/HamzaYusuf.jpg";
import Atabek from "../assets/scholars/ShaykhAtabek.png";
import Arshad from "../assets/scholars/arshad.jpg";
import ShaykhMuhammadYasirAlHanafi from "../assets/scholars/ShaykhMuhammadYasirAlHanafi.webp";
import NoumanAliKhan from "../assets/scholars/NoumanAliKhan.jpg";
import ShaykhHatim from "../assets/scholars/ShaykhHatim.webp";
import AdhamAlAsimi from "../assets/scholars/AdhamAlAsimi.jpg";
import DrHamzaelBekri from "../assets/scholars/DrHamzaelBekri.jpg";
import WalidAtiya from "../assets/scholars/WalidAtiya.jpeg";
import UstadhMunir from "../assets/scholars/UstadhMunir.jpg";
import AbdulKarimAlShdeifat from "../assets/scholars/AbdulKarimAlShdeifat.jpg";
import AhmadAlDamanhury from "../assets/scholars/AhmadAlDamanhury.jpg";
import SchAhmedAlsharif from "../assets/scholars/SchAhmedAlsharif.jpg";
import AdnanIbrahim from "../assets/scholars/AdnanIbrahim.jpg";
import ShaykhSulayamanVanAel from "../assets/scholars/ShaykhSulayamanVanAel.png";
import MuftiMenk from "../assets/scholars/menk.jpg";

const englishScholars = [
  {
    avatar: DrMustafaKhattab,
    name: "Dr Mustafa Khattab",
    description:
      "A prominent Canadian–Egyptian Muslim scholar, translator, and imam best known for The Clear Quran®, a modern and highly readable English translation of the Qur’an .",
  },
  {
    avatar: ShaykhSulayamanVanAel,
    name: "Sheikh Sulayaman van Ael",
    description:
      "Belgian-born convert and UK-based scholar. He memorised the Qur’an in Sudan, holds ijāzahs in recitation and hadith, and degrees in theology and mental care. He teaches at Cambridge Muslim College and serves as chaplain at UK universities.",
  },
  {
    avatar: ShamsTameez,
    name: "Shams Tameez",
    description:
      "Instructor at Khairabadi Institute, UK Jamia al-Karam graduate, Cambridge Muslim College alumnus, former Aylesbury Mosque imam, now pursuing further studies at Abu Hanifa Institute in Istanbul.",
  },
  {
    avatar: AHM,
    name: (
      <a href="https://m.youtube.com/@CambridgeMuslimCollege" target="_blank">
        Abdul Hakim Murad
      </a>
    ),
    description: (
      <div>
        Abdul Hakim Murad is a British Muslim scholar, theologian, and Dean of
        Cambridge Muslim College. A convert to Islam, he’s known for promoting
        traditional Sunni thought, translating classical works, and founding the
        Cambridge Central Mosque.{" "}
      </div>
    ),
  },
  {
    avatar: HamzaYusuf,
    name: (
      <a href="https://m.youtube.com/@SandalaMediaCenter" target="_blank">
        Hamza Yusuf
      </a>
    ),
    description: (
      <div>
        Shaykh Hamza Yusuf is an American Islamic scholar and co-founder of
        Zaytuna College. A convert to Islam, he’s known for promoting classical
        Sunni thought, translating key texts, and advancing Islamic education in
        the West.
      </div>
    ),
  },
  {
    avatar: Atabek,
    name: (
      <a href="https://m.youtube.com/@Nazam44" target="_blank">
        Shaykh Atabek Shukurov
      </a>
    ),
    description: (
      <div>
        An Uzbek-born, UK-based Islamic scholar and Māturīdī theologian. Trained
        in Uzbekistan, Damascus, and Al-Azhar, he founded Afiya Institute and
        Avicenna Academy, teaching traditional Islamic sciences and addressing
        contemporary issues.
      </div>
    ),
  },
  {
    avatar: Arshad,
    name: (
      <a
        href="https://www.youtube.com/@AsrarRashidOfficial?app=desktop"
        target="_blank"
      >
        Shaykh Asrar Rashid
      </a>
    ),
    description: (
      <div>
        Shaykh Asrar Rashid is a British-Pakistani Sunni scholar based in
        Birmingham, trained in Damascus and the UK. He teaches fiqh, kalām, and
        eschatology, and is known for public debates and books on theology and
        atheism.
      </div>
    ),
  },
  {
    avatar: ShaykhMuhammadYasirAlHanafi,
    name: (
      <a href="https://m.youtube.com/@hanafifiqh" target="_blank">
        Shaykh Muhammad Yasir Al‑Hanafi
      </a>
    ),
    description: (
      <div>
        is a UK-based Islamic scholar and Imam in Aylesbury, combining
        traditional Alim training with academic studies in philosophy (BA & MA)
        and a PhD in kalām. A graduate of the Islamic Institute of Dewsbury, he
        now teaches creed, fiqh, and philosophy, bridging classical Islamic
        sciences with modern intellectual thought.
      </div>
    ),
  },
  {
    avatar: MuftiMenk,
    name: (
      <a href="https://m.youtube.com/@muftimenkofficial" target="_blank">
        Mufti Menk
      </a>
    ),
    description: (
      <div>
        Mufti Menk is the Grand Mufti of Zimbabwe and a popular global Islamic
        speaker, known for accessible, motivational talks on faith, compassion,
        and daily life.
      </div>
    ),
  },
  {
    avatar: NoumanAliKhan,
    name: (
      <a href="https://m.youtube.com/@bayyinah" target="_blank">
        Nouman Ali Khan
      </a>
    ),
    description: (
      <div>
        Nouman Ali Khan is founder of Bayyinah Institute, known for teaching
        Qur’anic Arabic and tafsīr.
      </div>
    ),
  },
  {
    avatar: ShaykhHatim,
    name: (
      <a href="https://m.youtube.com/@bayyinah" target="_blank">
        Shaykh Hatim al-Awni
      </a>
    ),
    description: (
      <div>
        Shaykh Hatim al-Awni is a Saudi Hanbali scholar, hadith expert, and
        professor at Umm al-Qura University. A former member of Saudi Arabia’s
        Shura Council, he is known for his reformist critique of Wahhabism,
        emphasis on limiting takfīr, promoting intra-Sunni unity, and opposing
        extremism.
      </div>
    ),
  },
];

const arabicScholar = [
  {
    avatar: AdhamAlAsimi,
    name: (
      <a href="https://m.youtube.com/@adhmasmi2" target="_target">
        آدهم العاسمي
      </a>
    ),
    description: "Best lecture series by far on all subjects",
  },
  {
    avatar: DrHamzaelBekri,
    name: (
      <a
        href="https://www.youtube.com/@dr.hamzael-bekri8642?app=desktop"
        target="_target"
      >
        حمزة البكري
      </a>
    ),
    description: "Arguably the smartest scholar alive right now",
  },
  {
    avatar: ShSaedFoudeh,
    name: (
      <a href="https://m.youtube.com/@Saeedfodeh" target="_target">
        سعيد فوده
      </a>
    ),
    description:
      "Leading Ashʿarī theologian and critic of Salafī-Wahhābī thought.",
  },
  {
    avatar: Bouti,
    name: (
      <a href="https://m.youtube.com/@naseemalsham1" target="_target">
        البوطي
      </a>
    ),
    description: <div>Among greatest of All time</div>,
  },
  {
    avatar: WalidAtiya,
    name: (
      <a href="https://m.youtube.com/@الشيخ_وليد_عطية" target="_target">
        وليد عطية
      </a>
    ),
    description: "Excellent Imam incredibly knowledgeable on many subjects",
  },
  {
    avatar: UstadhMunir,
    name: (
      <a href="https://m.youtube.com/@RisaleiNurBSN" target="_target">
        Ustadh Munir
      </a>
    ),
    description: "Focused on works of Nursi RA best for strengthening faith)",
  },
  {
    avatar: AbdulKarimAlShdeifat,
    name: (
      <a href="https://m.youtube.com/@ThakafahTV" target="_target">
        عبدالكريم الشديفات
      </a>
    ),
    description:
      "Excellent lectures especially on Aqeeda... channel is 'الثقافت TV' but he's not the only one there",
  },
  {
    avatar: AhmadAlDamanhury,
    name: (
      <a
        href="https://www.youtube.com/@ahmadaldamanhury?app=desktop"
        target="_target"
      >
        أحمد الدمنهوري
      </a>
    ),
    description: "Great Tafsir series on Aqeeda Books",
  },
  {
    avatar: SchAhmedAlsharif,
    name: (
      <a
        href="https://www.youtube.com/@sch-Ahmed-Alsharif?app=desktop"
        target="_target"
      >
        الشيخ عبد الكريم الشديفات
      </a>
    ),
    description: "Great series on Aqeeda Books",
  },
  {
    avatar: AdnanIbrahim,
    name: (
      <a href="https://m.youtube.com/@Adnan-Ibrahim" target="_target">
        عدنان ابراهيم
      </a>
    ),
    description:
      "Islamic scholar known for his thought-provoking lectures and critical engagement with religious and scientific topics.",
  },
];

function Scholars() {
  return (
    <Container>
      <Center>
        <Stack>
          <h1>English-Speaking Scholars</h1>
          <Grid>
            {englishScholars.map((scholar) => (
              <Grid.Col mt={"lg"} span={{ base: 12, sm: 6, md: 4 }}>
                <Stack>
                  <Avatar size={200} src={scholar.avatar} alt="it's me" />
                  <Text>{scholar.name}</Text>
                  <Text c="dimmed" size="sm">
                    {scholar.description}
                  </Text>
                </Stack>
              </Grid.Col>
            ))}
          </Grid>
          <h1>Arabic-Speaking Scholars</h1>
          <Grid>
            {arabicScholar.map((scholar) => (
              <Grid.Col mt={"lg"} span={{ base: 12, sm: 6, md: 4 }}>
                <Stack>
                  <Avatar size={200} src={scholar.avatar} alt="it's me" />
                  <Text>{scholar.name}</Text>
                  <Text c="dimmed" size="sm">
                    {scholar.description}
                  </Text>
                </Stack>
              </Grid.Col>
            ))}
          </Grid>
        </Stack>
      </Center>
    </Container>
  );
}

export default PageTransition(Scholars);
