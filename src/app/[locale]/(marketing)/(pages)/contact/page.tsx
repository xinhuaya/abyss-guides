import Container from '@/components/layout/container';
import { constructMetadata } from '@/lib/metadata';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

type ContactCopy = {
  eyebrow: string;
  title: string;
  description: string;
  emailTitle: string;
  emailIntro: string;
  correctionTitle: string;
  correctionBody: string;
  updateTitle: string;
  updateBody: string;
  metadata: {
    title: string;
    description: string;
  };
};

const enCopy: ContactCopy = {
  eyebrow: 'Contact',
  title: 'Send corrections, tips, or questions.',
  description:
    'If a Subnautica 2 route changed, a source looks outdated, or a page needs a clearer answer, send a note. Patch-era corrections are especially useful.',
  emailTitle: 'Email',
  emailIntro: 'Contact Abyss Guides at',
  correctionTitle: 'For guide corrections',
  correctionBody:
    'Include the page URL, the line that should change, and the source or patch version if you have it.',
  updateTitle: 'For update tips',
  updateBody:
    'Send the official note, Steam post, or reliable route report. We re-check Early Access pages before indexing them.',
  metadata: {
    title: 'Contact Abyss Guides',
    description:
      'Contact Abyss Guides for corrections, Subnautica 2 guide updates, source notes, affiliate questions, or feedback.',
  },
};

const copies: Partial<Record<Locale, ContactCopy>> = {
  zh: {
    eyebrow: '联系',
    title: '发送修正、线索或问题。',
    description:
      '如果你发现 Subnautica 2 的路线变了、来源过时了，或者某个页面答案不够清楚，可以发给我们。抢先体验阶段的补丁修正最有价值。',
    emailTitle: '邮箱',
    emailIntro: '可以通过这个邮箱联系 Abyss Guides：',
    correctionTitle: '攻略修正',
    correctionBody:
      '请带上页面 URL、需要修改的内容，以及你看到的来源或补丁版本。',
    updateTitle: '更新线索',
    updateBody:
      '优先发送官方说明、Steam 公告或可靠路线记录。抢先体验内容会先复查，再进入索引。',
    metadata: {
      title: '联系 Abyss Guides',
      description:
        '联系 Abyss Guides，提交 Subnautica 2 攻略修正、更新线索、来源说明、联盟合作或反馈。',
    },
  },
  ja: {
    eyebrow: 'Contact',
    title: '修正、情報、質問を送る。',
    description:
      'Subnautica 2のルート変更、古いソース、分かりにくいページがあれば知らせてください。Early Access中のパッチ情報は特に助かります。',
    emailTitle: 'メール',
    emailIntro: 'Abyss Guidesへの連絡先：',
    correctionTitle: '攻略の修正',
    correctionBody:
      'ページURL、直したい内容、確認したソースやパッチ番号があれば一緒に送ってください。',
    updateTitle: '更新情報',
    updateBody:
      '公式ノート、Steam投稿、信頼できるルート報告を送ってください。Early Accessページは再確認してからインデックス対象にします。',
    metadata: {
      title: 'Abyss Guidesに連絡',
      description:
        'Abyss GuidesへSubnautica 2攻略の修正、更新情報、ソースメモ、提携、フィードバックを送るページ。',
    },
  },
  de: {
    eyebrow: 'Kontakt',
    title: 'Korrekturen, Hinweise oder Fragen senden.',
    description:
      'Wenn sich eine Subnautica 2 Route geaendert hat oder eine Quelle veraltet wirkt, schick uns einen Hinweis.',
    emailTitle: 'E-Mail',
    emailIntro: 'Du erreichst Abyss Guides unter',
    correctionTitle: 'Guide-Korrekturen',
    correctionBody:
      'Bitte sende die Seiten-URL, die betroffene Stelle und wenn moeglich die Quelle oder Patch-Version.',
    updateTitle: 'Update-Hinweise',
    updateBody:
      'Offizielle Notizen, Steam-Posts oder verlaessliche Routenberichte sind am hilfreichsten.',
    metadata: {
      title: 'Abyss Guides kontaktieren',
      description:
        'Kontakt zu Abyss Guides fuer Subnautica 2 Korrekturen, Updates, Quellen und Feedback.',
    },
  },
  fr: {
    eyebrow: 'Contact',
    title: 'Envoyer une correction, une info ou une question.',
    description:
      'Si une route Subnautica 2 a change ou si une source semble ancienne, envoyez-nous une note.',
    emailTitle: 'Email',
    emailIntro: 'Contactez Abyss Guides a',
    correctionTitle: 'Corrections de guide',
    correctionBody:
      'Ajoutez l URL de la page, le passage a corriger et la source ou version de patch.',
    updateTitle: 'Infos de mise a jour',
    updateBody:
      'Les notes officielles, posts Steam et rapports fiables sont les plus utiles.',
    metadata: {
      title: 'Contacter Abyss Guides',
      description:
        'Contacter Abyss Guides pour corrections Subnautica 2, mises a jour, sources ou feedback.',
    },
  },
  'es-419': {
    eyebrow: 'Contacto',
    title: 'Enviar correcciones, datos o preguntas.',
    description:
      'Si una ruta de Subnautica 2 cambio o una fuente quedo vieja, mandanos una nota.',
    emailTitle: 'Email',
    emailIntro: 'Contacta a Abyss Guides en',
    correctionTitle: 'Correcciones',
    correctionBody:
      'Incluye la URL, el texto que debe cambiar y la fuente o version del parche.',
    updateTitle: 'Datos de actualizacion',
    updateBody:
      'Sirven mas las notas oficiales, posts de Steam o reportes de ruta confiables.',
    metadata: {
      title: 'Contactar Abyss Guides',
      description:
        'Contactar Abyss Guides por correcciones de Subnautica 2, actualizaciones, fuentes o feedback.',
    },
  },
  'pt-BR': {
    eyebrow: 'Contato',
    title: 'Enviar correcoes, pistas ou perguntas.',
    description:
      'Se uma rota de Subnautica 2 mudou ou uma fonte ficou antiga, mande uma nota.',
    emailTitle: 'Email',
    emailIntro: 'Fale com Abyss Guides em',
    correctionTitle: 'Correcoes de guia',
    correctionBody:
      'Inclua a URL da pagina, o trecho a corrigir e a fonte ou versao do patch.',
    updateTitle: 'Dicas de atualizacao',
    updateBody:
      'Notas oficiais, posts da Steam e relatos confiaveis de rota ajudam mais.',
    metadata: {
      title: 'Contato Abyss Guides',
      description:
        'Contato do Abyss Guides para correcoes de Subnautica 2, atualizacoes, fontes ou feedback.',
    },
  },
  ko: {
    eyebrow: '문의',
    title: '수정, 제보, 질문을 보내주세요.',
    description:
      'Subnautica 2 루트가 바뀌었거나 오래된 정보가 보이면 알려주세요. Early Access 패치 제보가 특히 도움이 됩니다.',
    emailTitle: '이메일',
    emailIntro: 'Abyss Guides 연락처:',
    correctionTitle: '공략 수정',
    correctionBody:
      '페이지 URL, 바꿔야 할 내용, 확인한 출처나 패치 버전을 함께 보내주세요.',
    updateTitle: '업데이트 제보',
    updateBody:
      '공식 노트, Steam 게시글, 신뢰할 수 있는 루트 보고를 우선 확인합니다.',
    metadata: {
      title: 'Abyss Guides 문의',
      description:
        'Subnautica 2 공략 수정, 업데이트 제보, 출처 메모, 피드백을 Abyss Guides에 보내는 페이지.',
    },
  },
  ru: {
    eyebrow: 'Контакт',
    title: 'Отправить правку, подсказку или вопрос.',
    description:
      'Если маршрут Subnautica 2 изменился или источник устарел, напишите нам. Особенно полезны правки после патчей.',
    emailTitle: 'Email',
    emailIntro: 'Связаться с Abyss Guides:',
    correctionTitle: 'Правки гайдов',
    correctionBody:
      'Добавьте URL страницы, что именно нужно изменить, и источник или версию патча.',
    updateTitle: 'Подсказки по обновлениям',
    updateBody:
      'Лучше всего подходят официальные заметки, посты Steam и надежные отчеты по маршрутам.',
    metadata: {
      title: 'Связаться с Abyss Guides',
      description:
        'Контакт Abyss Guides для правок Subnautica 2, обновлений, источников и обратной связи.',
    },
  },
};

function getCopy(locale: Locale): ContactCopy {
  return copies[locale] ?? enCopy;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata | undefined> {
  const { locale } = await params;
  const copy = getCopy(locale);

  return constructMetadata({
    title: copy.metadata.title,
    description: copy.metadata.description,
    locale,
    pathname: '/contact',
  });
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const copy = getCopy(locale);

  return (
    <main className="min-h-screen bg-[#031314] text-[#dff8f0]">
      <Container className="px-4 py-16 md:py-24">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#f08b4f]">
            {copy.eyebrow}
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-normal md:text-6xl">
            {copy.title}
          </h1>
          <p className="mt-6 text-lg leading-8 text-[#abc8c3]">
            {copy.description}
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-[minmax(0,1fr)_360px]">
          <section className="border border-cyan-200/12 bg-[#071f23] p-6">
            <h2 className="text-2xl font-semibold">{copy.emailTitle}</h2>
            <p className="mt-4 leading-8 text-[#abc8c3]">
              {copy.emailIntro}{' '}
              <a
                className="text-[#78ead7] underline-offset-4 hover:underline"
                href="mailto:support@abyssguides.com"
              >
                support@abyssguides.com
              </a>
              .
            </p>
          </section>

          <aside className="space-y-5">
            <section className="border border-cyan-200/12 bg-[#071f23] p-5">
              <h2 className="font-semibold text-[#e8fff9]">
                {copy.correctionTitle}
              </h2>
              <p className="mt-3 text-sm leading-6 text-[#abc8c3]">
                {copy.correctionBody}
              </p>
            </section>
            <section className="border border-cyan-200/12 bg-[#071f23] p-5">
              <h2 className="font-semibold text-[#e8fff9]">
                {copy.updateTitle}
              </h2>
              <p className="mt-3 text-sm leading-6 text-[#abc8c3]">
                {copy.updateBody}
              </p>
            </section>
          </aside>
        </div>
      </Container>
    </main>
  );
}
