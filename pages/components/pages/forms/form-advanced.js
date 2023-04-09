import Seo from '@/shared/layout-components/seo/seo';
import dynamic from 'next/dynamic';
import React, { useState } from 'react';
import PageHeader from '../../../../shared/layout-components/pageheader/PageHeader';
const Formadvances = dynamic(() => import("@/shared/data/Pages/Forms/formadvances"), {ssr: false,});


const FormAdvanced = () => {

  return (
    <div >
      <Seo title="Form Advanced"/>

      <PageHeader titles="Form Advanced" active="Form Advanced" items={['Forms']} />
      <Formadvances/>

    </div>

  )
};

FormAdvanced.layout = "Contentlayout"
export default FormAdvanced;
