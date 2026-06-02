import Container from '@/components/layout/container';
import { constructMetadata } from '@/lib/metadata';
import { getUrlWithLocale } from '@/lib/urls';
import { Routes } from '@/routes';
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
  replyTitle: string;
  replyBody: string;
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
    'Official notes, Steam posts, patch notes, and reliable route reports help us update Early Access pages without guessing.',
  replyTitle: 'What happens next',
  replyBody:
    'We check notes against current sources before changing indexed guide pages. Small corrections may be folded into the next page update.',
  metadata: {
    title: 'Contact Abyss Guides',
    description:
      'Contact Abyss Guides for Subnautica 2 guide corrections, source notes, update tips, affiliate questions, or feedback.',
  },
};

const copies: Partial<Record<Locale, ContactCopy>> = {
  zh: {
    eyebrow: '联系',
    title: '发送修正、线索或问题。',
    description:
      '如果你发现 Subnautica 2 的路线变了、来源过时了，或者某个页面的答案不够清楚，可以发给我们。抢先体验阶段的补丁修正尤其有用。',
    emailTitle: '邮箱',
    emailIntro: '你可以通过这个邮箱联系 Abyss Guides：',
    correctionTitle: '攻略修正',
    correctionBody:
      '请带上页面 URL、需要修改的句子，以及你看到的来源、视频时间点或补丁版本。',
    updateTitle: '更新线索',
    updateBody:
      '优先发送官方说明、Steam 公告、补丁说明，或者可信的路线记录。我们会先复查，再更新已收录页面。',
    replyTitle: '之后会怎么处理',
    replyBody:
      '我们会把反馈和当前来源重新核对。小修正通常会合并进下一次页面更新，不会直接照搬未经验证的说法。',
    metadata: {
      title: '联系 Abyss Guides',
      description:
        '联系 Abyss Guides，提交 Subnautica 2 攻略修正、来源说明、更新线索、联盟合作或反馈。',
    },
  },
  ja: {
    eyebrow: 'お問い合わせ',
    title: '修正、情報、質問を送る。',
    description:
      'Subnautica 2 のルート変更、古くなった情報、分かりにくいページがあれば知らせてください。Early Access 中のパッチ情報は特に助かります。',
    emailTitle: 'メール',
    emailIntro: 'Abyss Guides への連絡先：',
    correctionTitle: '攻略の修正',
    correctionBody:
      'ページ URL、直したい箇所、確認したソースやパッチ番号があれば一緒に送ってください。',
    updateTitle: '更新情報',
    updateBody:
      '公式ノート、Steam 投稿、パッチノート、信頼できるルート報告を優先して確認します。',
    replyTitle: 'その後の流れ',
    replyBody:
      '送られた内容は現在のソースと照合してから反映します。小さな修正は次回更新にまとめることがあります。',
    metadata: {
      title: 'Abyss Guides に連絡',
      description:
        'Subnautica 2 攻略の修正、更新情報、ソースメモ、提携、フィードバックを Abyss Guides に送るページ。',
    },
  },
  ko: {
    eyebrow: '문의',
    title: '수정, 제보, 질문을 보내 주세요.',
    description:
      'Subnautica 2 루트가 바뀌었거나 출처가 오래되었거나 답이 더 명확해야 하는 페이지가 있다면 알려 주세요. 얼리 액세스 패치 제보는 특히 도움이 됩니다.',
    emailTitle: '이메일',
    emailIntro: 'Abyss Guides 연락처:',
    correctionTitle: '공략 수정',
    correctionBody:
      '페이지 URL, 수정할 문장, 확인한 출처나 패치 버전을 함께 보내 주세요.',
    updateTitle: '업데이트 제보',
    updateBody:
      '공식 노트, Steam 게시글, 패치 노트, 신뢰할 수 있는 루트 기록을 우선 확인합니다.',
    replyTitle: '처리 방식',
    replyBody:
      '제보 내용은 현재 출처와 다시 대조한 뒤 반영합니다. 작은 수정은 다음 페이지 업데이트에 함께 넣을 수 있습니다.',
    metadata: {
      title: 'Abyss Guides 문의',
      description:
        'Subnautica 2 공략 수정, 업데이트 제보, 출처 메모, 제휴 문의, 피드백을 Abyss Guides에 보내는 페이지.',
    },
  },
  ru: {
    eyebrow: 'Контакты',
    title: 'Отправьте правку, подсказку или вопрос.',
    description:
      'Если маршрут в Subnautica 2 изменился, источник устарел или странице нужен более ясный ответ, напишите нам. Особенно полезны правки после патчей Early Access.',
    emailTitle: 'Email',
    emailIntro: 'Связаться с Abyss Guides:',
    correctionTitle: 'Правки гайдов',
    correctionBody:
      'Укажите URL страницы, фразу для исправления и источник или версию патча, если они есть.',
    updateTitle: 'Подсказки по обновлениям',
    updateBody:
      'Лучше всего подходят официальные заметки, посты Steam, патчноуты и надежные отчеты по маршрутам.',
    replyTitle: 'Что дальше',
    replyBody:
      'Мы сверяем сообщения с текущими источниками перед изменением индексируемых страниц. Небольшие правки могут попасть в следующий апдейт.',
    metadata: {
      title: 'Связаться с Abyss Guides',
      description:
        'Контакты Abyss Guides для правок гайдов Subnautica 2, обновлений, источников, партнерских вопросов и обратной связи.',
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
      'Offizielle Notizen, Steam-Posts, Patchnotes und verlaessliche Routenberichte helfen am meisten.',
    replyTitle: 'Was danach passiert',
    replyBody:
      'Wir pruefen Hinweise gegen aktuelle Quellen, bevor wir indexierte Guide-Seiten aendern.',
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
      'Les notes officielles, posts Steam, patch notes et rapports fiables sont les plus utiles.',
    replyTitle: 'Et ensuite',
    replyBody:
      'Nous verifions les notes avec les sources actuelles avant de modifier les pages indexees.',
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
      'Las notas oficiales, posts de Steam, patch notes y reportes confiables ayudan mas.',
    replyTitle: 'Que pasa despues',
    replyBody:
      'Revisamos cada dato contra fuentes actuales antes de cambiar paginas indexadas.',
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
      'Notas oficiais, posts da Steam, patch notes e relatos confiaveis ajudam mais.',
    replyTitle: 'O que acontece depois',
    replyBody:
      'Conferimos cada dica com fontes atuais antes de alterar paginas indexadas.',
    metadata: {
      title: 'Contato Abyss Guides',
      description:
        'Contato do Abyss Guides para correcoes de Subnautica 2, atualizacoes, fontes ou feedback.',
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
    pathname: Routes.Contact,
  });
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const copy = getCopy(locale);
  const pageUrl = getUrlWithLocale(Routes.Contact, locale).replace(/\/$/, '');
  const homeUrl = getUrlWithLocale(Routes.Root, locale).replace(/\/$/, '');
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'ContactPage',
      name: copy.metadata.title,
      description: copy.metadata.description,
      url: pageUrl,
      inLanguage: locale,
      isPartOf: {
        '@type': 'WebSite',
        name: 'Abyss Guides',
        url: homeUrl,
      },
      about: {
        '@type': 'VideoGame',
        name: 'Subnautica 2',
      },
      contactPoint: {
        '@type': 'ContactPoint',
        email: 'support@abyssguides.com',
        contactType: 'guide corrections and update tips',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Abyss Guides',
          item: homeUrl,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: copy.eyebrow,
          item: pageUrl,
        },
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-[#031314] text-[#dff8f0]">
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
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
            <section className="border border-cyan-200/12 bg-[#071f23] p-5">
              <h2 className="font-semibold text-[#e8fff9]">
                {copy.replyTitle}
              </h2>
              <p className="mt-3 text-sm leading-6 text-[#abc8c3]">
                {copy.replyBody}
              </p>
            </section>
          </aside>
        </div>
      </Container>
    </main>
  );
}
