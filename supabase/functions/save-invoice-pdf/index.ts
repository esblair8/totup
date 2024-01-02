import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.32.0'

console.log('Hello from invoice function!')

const supabaseUrl = 'https://oitfkhbgghwykbfmvfyd.supabase.co'
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9pdGZraGJnZ2h3eWtiZm12ZnlkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODU3MTk2ODMsImV4cCI6MjAwMTI5NTY4M30.jYsiOTA1pRmw7jtmyL4Guas0elaHfr4OcC9pwLuuMUo'
const supabase = createClient(supabaseUrl, supabaseKey)

Deno.serve(async (req) => {
  const request = await req.json()
  console.log('request', request)
  const fileName = 'invoice.pdf'
  const { data, error } = await supabase.storage.from('invoices').upload(fileName, request, {
    cacheControl: '3600',
    contentType: 'application/pdf',
    upsert: true
  })

  if (error) {
    console.error('Error uploading file:', error.message)
  } else {
    console.log('File uploaded successfully:', data)
  }

  return new Response(JSON.stringify({ success: true }), {
    headers: { 'Content-Type': 'application/json' }
  })
})
