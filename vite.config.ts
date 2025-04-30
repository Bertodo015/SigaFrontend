import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()], //→ Aplica o plugin React no build. Isso é necessário para que o Vite entenda JSX e faça o Hot Reload funcionar corretamente. 
  base: './', //agora os caminhos são relativos ao próprio arquivo
})
