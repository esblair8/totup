import { PDFDocument, StandardFonts, rgb } from 'pdf-lib'
import useSupabase from '@/composables/UseSupabase'
import useAuthUser from '@/composables/UseAuthUser'

const { supabase } = useSupabase()
const { loggedInUser } = useAuthUser()

export default function useInvoicePDFGenerator() {
  const createPdf = async () => {
    const pdfDoc = await PDFDocument.create()
    const timesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman)

    const page = pdfDoc.addPage()
    const { width, height } = page.getSize()
    const fontSize = 30
    page.drawText('Creating PDFs in JavaScript is awesome!', {
      x: 50,
      y: height - 4 * fontSize,
      size: fontSize,
      font: timesRomanFont,
      color: rgb(0, 0.53, 0.71)
    })

    const pdfBytes = await pdfDoc.save()
    return pdfBytes
  }

  const generatePDFInvoice = async () => {
    console.log('invoicePDFGenerator')
    const objectFilePath = `${loggedInUser.value.id}/invoice.pdf`
    // Default export is a4 paper, portrait, using millimeters for units
    const pdfBytes = await createPdf()
    console.log('pdfBytes')
    console.log(loggedInUser)
    const { data, error } = await supabase.storage
      .from('invoice-pdfs')
      .upload(objectFilePath, pdfBytes, {
        contentType: 'application/pdf',
        upsert: true
      })

    if (error) {
      console.log(error)
    } else {
      console.log(data)
      const publicUrl = supabase.storage.from('bucket').getPublicUrl(objectFilePath)
      console.log(publicUrl)
      //update invoice table with url
    }
  }

  return {
    generatePDFInvoice
  }
}
