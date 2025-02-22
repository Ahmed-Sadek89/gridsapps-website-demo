'use client';
import React from 'react';
//= Components
import { FloatingWhatsApp } from 'react-floating-whatsapp'

type Props = {}

function WhatsappWidget({ }: Props) {
  return (
    <FloatingWhatsApp
      avatar="/imgs/logos/gridsapps.svg"
      phoneNumber="972505125857"
      accountName="Grids Apps"
    />
  )
}

export default WhatsappWidget