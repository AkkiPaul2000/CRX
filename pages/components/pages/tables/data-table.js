import Seo from '@/shared/layout-components/seo/seo';
import dynamic from 'next/dynamic';
import React from 'react';
import PageHeader from '../../../../shared/layout-components/pageheader/PageHeader';
const Datatables = dynamic(() => import("@/shared/data/Pages/TablesData/datatables"), {ssr: false,});



const DataTable = () => {

  return (

  <div >
    <Seo title="Data Table"/>

    <PageHeader titles="Data Table" active="Data Table" items={['Tables']} />
    <Datatables/>
    
    {/* <!-- End Row --> */}
  </div>
)
  };
  DataTable.layout = "Contentlayout"
export default DataTable;