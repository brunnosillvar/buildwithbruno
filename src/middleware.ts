import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  // Se for a rota raiz, redireciona baseado no idioma do navegador
  if (pathname === '/') {
    // Obtém o cabeçalho Accept-Language
    const acceptLanguage = request.headers.get('accept-language') || ''

    // Verifica se o idioma preferido contém 'pt' (português)
    const prefersPt = acceptLanguage.toLowerCase().includes('pt')

    // Redireciona para /pt se o idioma preferido for português, caso contrário para /en
    const languagePath = prefersPt ? '/pt' : '/en'
    return NextResponse.redirect(new URL(languagePath, request.url))
  }

  return NextResponse.next()
}

// Configuração para executar o middleware apenas nas rotas especificadas
export const config = {
  matcher: [
    /*
     * Corresponde a:
     * - / (rota raiz)
     */
    '/'
  ]
}
