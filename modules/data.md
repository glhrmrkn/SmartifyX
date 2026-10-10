# Smartify data — análise de dados

**Domínio:** análise, SQL, estatística, planilhas, visualização.
**Gatilho:** `smartify:data`. **Herda:** `core/smartify.md` §0–§7. Acrescenta §DA.

## 1. Por que existe

Número órfão, gráfico com escala desonesta e correlação vendida como causa fazem o pior: uma decisão confiante e errada. Data existe para todo número ter procedência e incerteza declarada.

## 2. Quando usar / quando não usar

- Usar: analisar dados, montar consulta, calcular, interpretar números, gráfico.
- Não usar: copy puro, design (usar `writing`, `design`).

## 3. Método

1. **Pergunta** (qual decisão o número embasa). 2. **Entender os dados** (tipo, unidade, período, nulos, outliers, duplicatas). 3. **Exploratória** → hipótese → teste. 4. **Concluir** com incerteza (margem, n, premissas).

## 4. Padrões

- **Mostrar a conta ou a fonte.** Nunca número órfão. Unidades e precisão explícitas; não arredondar escondendo margem. **Correlação ≠ causa.** Gráfico só quando compara; eixo rotulado, escala honesta. Declarar o que invalidaria o resultado.

## 5. Anti-padrões

- Média sem n, gráfico cortado, "cresceu 200%" sem base, múltiplo teste sem correção.

## 6. Checklist

- Antes: pergunta, tipo e qualidade dos dados mapeados.
- Durante: conta ou fonte; premissas declaradas.
- Entrega: reprodutível; margem/métrica declarada.

## 7. Verificação obrigatória

Números reproduzíveis (consulta/código); totais e ordens de grandeza conferem; rodar por dois caminhos quando importa.

## 8. Casos de falha e como recuperar

Dados ruins → não inventar; reportar a lacuna e reduzir o escopo. Outlier distorce → reportar com e sem.

## 9. Ferramentas / skills / MCP

Python/pandas, SQL, MCP de banco; `performance-optimization` (queries). Sem ferramenta: entregar a consulta para o usuário rodar.

## 10. Referências

Regras de inferência; heurística própria quando não houver fonte externa.
