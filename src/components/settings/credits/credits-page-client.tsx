'use client';

import { getSortingStateParser } from '@/components/data-table/lib/parsers';
import type { ExtendedColumnSort } from '@/components/data-table/types/data-table';
import { CreditPackages } from '@/components/settings/credits/credit-packages';
import { CreditTransactionsTable } from '@/components/settings/credits/credit-transactions-table';
import CreditsCard from '@/components/settings/credits/credits-card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import type { CreditTransaction } from '@/credits/types';
import { useCreditTransactions } from '@/hooks/use-credits';
import { authClient } from '@/lib/auth-client';
import type { ColumnFiltersState, SortingState } from '@tanstack/react-table';
import { BadgeCheckIcon, CoinsIcon, SparklesIcon } from 'lucide-react';
import { useTranslations } from 'next-intl';
import {
  parseAsIndex,
  parseAsInteger,
  parseAsString,
  parseAsStringLiteral,
  useQueryStates,
} from 'nuqs';
import { useEffect, useMemo, useRef } from 'react';

/**
 * Credits page client, show credit balance and transactions
 */
export default function CreditsPageClient() {
  const t = useTranslations('Dashboard.settings.credits');

  // Get user session for user ID
  const { data: session } = authClient.useSession();
  const currentUser = session?.user;

  const sortableColumnIds = useMemo<
    Array<Extract<keyof CreditTransaction, string>>
  >(
    () => [
      'type',
      'amount',
      'remainingAmount',
      'description',
      'paymentId',
      'expirationDate',
      'expirationDateProcessedAt',
      'createdAt',
      'updatedAt',
    ],
    []
  );

  const sortableColumnSet = useMemo(
    () => new Set<Extract<keyof CreditTransaction, string>>(sortableColumnIds),
    [sortableColumnIds]
  );

  const defaultSorting = useMemo<ExtendedColumnSort<CreditTransaction>[]>(
    () => [{ id: 'createdAt', desc: true }],
    []
  );

  // Manage all URL states in the parent component
  const [{ tab, page, size, search, sort, type }, setQueryStates] =
    useQueryStates({
      tab: parseAsStringLiteral(['balance', 'transactions']).withDefault(
        'balance'
      ),
      // Transaction-specific parameters
      page: parseAsIndex.withDefault(0), // parseAsIndex adds +1 to URL, so 0-based internally, 1-based in URL
      size: parseAsInteger.withDefault(10),
      search: parseAsString.withDefault(''),
      sort: getSortingStateParser<CreditTransaction>(
        sortableColumnIds
      ).withDefault(defaultSorting),
      type: parseAsString.withDefault(''),
    });

  // normalize sorting to ensure it only contains valid column ids
  const normalizeSorting = (
    value: SortingState
  ): ExtendedColumnSort<CreditTransaction>[] => {
    const filtered = value
      .filter((item) =>
        sortableColumnSet.has(
          item.id as Extract<keyof CreditTransaction, string>
        )
      )
      .map((item) => ({
        ...item,
        id: item.id as Extract<keyof CreditTransaction, string>,
      })) as ExtendedColumnSort<CreditTransaction>[];

    return filtered.length > 0 ? filtered : defaultSorting;
  };

  const safeSorting = normalizeSorting(sort);

  // Build filters for both client UI and server API
  const filters = useMemo(() => {
    const clientFilters: ColumnFiltersState = [];
    const serverFilters: Array<{ id: string; value: string }> = [];

    if (type) {
      clientFilters.push({ id: 'type', value: [type] });
      serverFilters.push({ id: 'type', value: type });
    }

    return { clientFilters, serverFilters };
  }, [type]);

  const filtersSignature = useMemo(() => JSON.stringify({ type }), [type]);

  const previousFiltersSignatureRef = useRef(filtersSignature);

  // reset page to 0 when filters change
  useEffect(() => {
    if (previousFiltersSignatureRef.current === filtersSignature) return;
    previousFiltersSignatureRef.current = filtersSignature;
    void setQueryStates(
      { page: 0 },
      {
        history: 'replace',
        shallow: true,
      }
    );
  }, [filtersSignature, setQueryStates]);

  const handleTabChange = (value: string) => {
    if (value === 'balance' || value === 'transactions') {
      if (value === 'balance') {
        // When switching to balance tab, clear transaction parameters
        setQueryStates({
          tab: value,
          page: null,
          size: null,
          search: null,
          sort: null,
          type: null,
        });
      } else {
        // When switching to transactions tab, just set the tab
        setQueryStates({ tab: value });
      }
    }
  };

  // Fetch credit transactions data
  const { data, isLoading } = useCreditTransactions(
    currentUser?.id,
    page,
    size,
    search,
    safeSorting,
    filters.serverFilters
  );

  const heroPoints = [
    {
      title: t('hero.points.0.title'),
      description: t('hero.points.0.description'),
    },
    {
      title: t('hero.points.1.title'),
      description: t('hero.points.1.description'),
    },
    {
      title: t('hero.points.2.title'),
      description: t('hero.points.2.description'),
    },
  ];

  return (
    <div className="flex flex-col gap-8">
      <section className="overflow-hidden rounded-3xl border bg-[#fff7df] p-5 shadow-sm md:p-7">
        <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 font-bold text-amber-800 text-xs uppercase tracking-[0.2em] shadow-sm">
              <SparklesIcon className="size-3.5 text-teal-600" />
              {t('hero.eyebrow')}
            </div>
            <h2 className="mt-4 text-balance font-black text-2xl md:text-3xl">
              {t('hero.title')}
            </h2>
            <p className="mt-3 max-w-2xl text-muted-foreground">
              {t('hero.description')}
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
            {heroPoints.map((point, index) => (
              <div
                className="flex items-start gap-3 rounded-2xl border bg-white/80 p-4"
                key={point.title}
              >
                {index === 0 ? (
                  <CoinsIcon className="mt-0.5 size-5 text-amber-700" />
                ) : (
                  <BadgeCheckIcon className="mt-0.5 size-5 text-teal-700" />
                )}
                <div>
                  <p className="font-bold text-sm">{point.title}</p>
                  <p className="mt-1 text-muted-foreground text-xs">
                    {point.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Tabs value={tab} onValueChange={handleTabChange} className="w-full">
        <TabsList className="">
          <TabsTrigger value="balance">{t('tabs.balance')}</TabsTrigger>
          <TabsTrigger value="transactions">
            {t('tabs.transactions')}
          </TabsTrigger>
        </TabsList>

        <TabsContent value="balance" className="mt-4 flex flex-col gap-8">
          {/* Credits Balance Card */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <CreditsCard />
          </div>

          {/* Credit Packages */}
          <div className="w-full">
            <CreditPackages />
          </div>
        </TabsContent>

        <TabsContent value="transactions" className="mt-4">
          {/* Credit Transactions */}
          <CreditTransactionsTable
            data={data?.items || []}
            total={data?.total || 0}
            pageIndex={page}
            pageSize={size}
            search={search}
            sorting={safeSorting}
            filters={filters.clientFilters}
            loading={isLoading}
            onSearch={(newSearch) =>
              setQueryStates({ search: newSearch, page: 0 })
            }
            onPageChange={(newPageIndex) =>
              setQueryStates({ page: newPageIndex })
            }
            onPageSizeChange={(newPageSize) =>
              setQueryStates({ size: newPageSize, page: 0 })
            }
            onSortingChange={(newSorting) => {
              const nextSorting = normalizeSorting(newSorting);
              setQueryStates({ sort: nextSorting, page: 0 });
            }}
            onFiltersChange={(nextFilters) => {
              const typeFilter = nextFilters.find(
                (filter) => filter.id === 'type'
              );
              const nextType =
                typeFilter && Array.isArray(typeFilter.value)
                  ? ((typeFilter.value[0] as string) ?? '')
                  : '';
              setQueryStates(
                { type: nextType, page: 0 },
                { history: 'replace', shallow: true }
              );
            }}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
}
