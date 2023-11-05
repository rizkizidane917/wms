import React, { useState, useEffect } from "react";

import PageLayout from "@/layouts/page-layout";
import { Card, DoughnutChart, Typography } from "@/components/shared";
import { DashboardWelcome } from "@/components/page-components";
import { useInboundStore } from "@/store/Inbound-store";
import DashboardRecentActivityTable from "@/components/page-components/Dashboard/dashboard-recent-activity-table";
import { useOutboundStore } from "@/store/outbound-store";
import Head from "next/head";

export default function Home() {
  const { inbound } = useInboundStore();
  const { outbound } = useOutboundStore();

  const [totalInOut, setTotalInOut] = useState([]);

  useEffect(() => {
    setTotalInOut([inbound.length, outbound.length]);
  }, [inbound, outbound]);

  return (
    <>
      <Head>
        <title>Dashboard - Infinity </title>
      </Head>
      <PageLayout title="Dashboard">
        <DashboardWelcome />

        <div className="grid md:grid-cols-2 grid-cols-1 gap-6 mt-12">
          <Card className="relative">
            <header className="border-b pb-3">
              <Typography type="h4" className="font-semibold text-slate-800">
                Total Inventory
              </Typography>
            </header>
            <Typography
              type="custom"
              className="text-[130px] text-green flex items-center justify-center"
            >
              {inbound?.length}
            </Typography>
          </Card>

          <Card>
            <header className="border-b pb-3">
              <Typography type="h4" className="font-semibold text-slate-800">
                Total Inbound & Outbound
              </Typography>
            </header>
            <DoughnutChart labels={["Inbound", "Outbound"]} data={totalInOut} />
          </Card>
        </div>

        <div className="grid grid-cols-1 gap-6 mt-6">
          <Card className="max-h-[350px] h-full overflow-auto">
            <header className="border-b pb-3">
              <Typography type="h4" className="font-semibold text-slate-800">
                Recent Acitvity
              </Typography>
            </header>
            <div className="mt-4">
              <DashboardRecentActivityTable data={inbound} />
            </div>
          </Card>
        </div>
      </PageLayout>
    </>
  );
}
