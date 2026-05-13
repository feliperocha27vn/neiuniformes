# Regras de classes Tailwind

- Quando existir classe utilitaria equivalente em escala, prefira a classe de escala em vez de valor arbitrario.
- Exemplo: use `max-w-281.5` no lugar de `max-w-[1126px]`.
- Siga a sugestao do plugin `tailwindcss(suggestCanonicalClasses)` para classes canônicas; mantenha valor arbitrario somente quando nao houver equivalente.

# Regras de Nomenclatura e Importação

- Evite sobrescrever (shadowing) variáveis ou classes globais padrão do JavaScript.
- Exemplo: Ao importar o componente de mapa de bibliotecas como `react-map-gl`, renomeie a importação para evitar conflito com a classe global `Map`. Use `import MapGL from 'react-map-gl'` no lugar de `import Map from 'react-map-gl'`.
