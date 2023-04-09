import Seo from '@/shared/layout-components/seo/seo';
import dynamic from 'next/dynamic';
import React from 'react';
import PageHeader from '../../../shared/layout-components/pageheader/PageHeader';
const Filemanager = dynamic(() => import("@/shared/data/datafilemanger/filemanager"), {ssr: false,});


const FileManagers = () => {
  return (
  <div >
		  <Seo title="File Manager"/>

    <PageHeader titles="File Manager" active="File Manager" items={['Componets']} />
    {/* <!-- Row --> */}
    <Filemanager/>
    {/* <!-- End Row --> */}
  </div>
)
  };
  FileManagers.layout = "Contentlayout"

export default FileManagers;
