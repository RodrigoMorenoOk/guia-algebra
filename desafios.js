export default [
// D1: (x²-1)/(x-1) ≡ x+1
  {
    id: "D1", nivel: 1, codigo: "D1",
    explicacion: {
      titulo: "Diferencia de cuadrados",
      formulaGeneral: "a^2-b^2=(a-b)(a+b)",
      texto: "Cualquier expresión de la forma a²−b² se factoriza como el producto de la suma por la diferencia de las dos bases. Es la herramienta más usada para simplificar fracciones algebraicas: te permite encontrar un factor común entre numerador y denominador y cancelarlo.",
      notaAplicacion: "El numerador $x^2-1$ tiene exactamente esa forma, con $a=x$, $b=1$."
    },
    consigna: { textoConsigna: "Demostrá que las siguientes expresiones son equivalentes para todo x≠1.", expresionA: "\\dfrac{x^2-1}{x-1}", expresionB: "x+1" },
    pasos: [
      { prompt: "¿Cómo factorizás el numerador $x^2-1$?", pideJustificacionLibre: true,
        opciones: [
          { id:"A", expr:"(x-1)(x+1)", justificacionCorta:"Diferencia de cuadrados con a=x, b=1", esValida:true, feedback:"Correcto. x²−1=(x−1)(x+1)." },
          { id:"B", expr:"(x+1)^2", justificacionCorta:"Lo trato como cuadrado de binomio", esValida:false, feedback:"x²−1 no tiene el término del medio 2ab que requiere un cuadrado de binomio." },
          { id:"C", expr:"x(x-1)", justificacionCorta:"Saco x como factor común", esValida:false, feedback:"x no es factor común: el término −1 no tiene x." }
        ]
      },
      { prompt: "Tenés $\\dfrac{(x-1)(x+1)}{x-1}$. ¿Cómo seguís?", pideJustificacionLibre: false,
        opciones: [
          { id:"A", expr:"x+1", justificacionCorta:"Cancelo el factor (x−1) común", esValida:true, feedback:"Correcto. (x−1) se cancela porque x≠1." },
          { id:"B", expr:"\\dfrac{x+1}{x-1}", justificacionCorta:"Cancelo solo una x suelta", esValida:false, feedback:"No se cancela una letra aislada: hay que cancelar el factor (x−1) completo." }
        ]
      }
    ],
    formaCanonica: "x+1"
  },

  // D2: 1/x - 1/(x+1) ≡ 1/(x²+x)
  {
    id: "D2", nivel: 1, codigo: "D2",
    explicacion: {
      titulo: "Común denominador",
      formulaGeneral: "\\dfrac{a}{b}-\\dfrac{c}{d}=\\dfrac{ad-bc}{bd}",
      texto: "Para restar fracciones con distinto denominador, hay que llevarlas a un denominador común multiplicando cruzado, y después restar los numeradores resultantes.",
      notaAplicacion: "Acá el denominador común natural es $x(x+1)$, que además coincide con $x^2+x$ una vez distribuido."
    },
    consigna: { textoConsigna: "Demostrá que las siguientes expresiones son equivalentes para x≠0, x≠−1.", expresionA: "\\dfrac{1}{x}-\\dfrac{1}{x+1}", expresionB: "\\dfrac{1}{x^2+x}" },
    pasos: [
      { prompt: "¿Cuál es el común denominador y qué queda en el numerador?", pideJustificacionLibre: true,
        opciones: [
          { id:"A", expr:"\\dfrac{(x+1)-x}{x(x+1)}", justificacionCorta:"Denominador x(x+1); numeradores cruzados (x+1) y x", esValida:true, feedback:"Correcto. Multiplicás cada numerador por el denominador que le falta a su fracción." },
          { id:"B", expr:"\\dfrac{1-1}{x-(x+1)}", justificacionCorta:"Resto numeradores y denominadores por separado", esValida:false, feedback:"Las fracciones no se restan restando numeradores entre sí y denominadores entre sí." },
          { id:"C", expr:"\\dfrac{x+1-x}{x+(x+1)}", justificacionCorta:"Denominador común es la suma x+(x+1)", esValida:false, feedback:"El denominador común de un producto de denominadores distintos es su producto, no su suma." }
        ]
      },
      { prompt: "Tenés $\\dfrac{(x+1)-x}{x(x+1)}$. ¿Qué te queda al simplificar?", pideJustificacionLibre: false,
        opciones: [
          { id:"A", expr:"\\dfrac{1}{x^2+x}", justificacionCorta:"(x+1)-x=1, y x(x+1)=x²+x", esValida:true, feedback:"Correcto. El numerador se reduce a 1 y el denominador distribuido es x²+x." },
          { id:"B", expr:"\\dfrac{1}{x^2+1}", justificacionCorta:"Distribuyo x(x+1) como x²+1", esValida:false, feedback:"x(x+1)=x²+x, no x²+1. Revisá la distribución." }
        ]
      }
    ],
    formaCanonica: "\\dfrac{1}{x^2+x}"
  },

  // D3: √50 - √18 + √8 ≡ 4√2
  {
    id: "D3", nivel: 1, codigo: "D3",
    explicacion: {
      titulo: "Simplificación de radicales",
      formulaGeneral: "\\sqrt{a\\cdot b} = \\sqrt{a}\\cdot\\sqrt{b}",
      texto: "Para simplificar una raíz cuadrada, conviene descomponer el número en un factor que sea cuadrado perfecto (4, 9, 16, 25...) multiplicado por otro factor, y sacar la raíz del cuadrado perfecto fuera del radical.",
      notaAplicacion: "50=25·2, 18=9·2 y 8=4·2: los tres comparten el factor 2 dentro de la raíz, lo que va a permitir sumarlos como términos semejantes."
    },
    consigna: { textoConsigna: "Demostrá que las siguientes expresiones son equivalentes.", expresionA: "\\sqrt{50}-\\sqrt{18}+\\sqrt{8}", expresionB: "4\\sqrt{2}" },
    pasos: [
      { prompt: "¿Cómo se simplifica cada radical por separado?", pideJustificacionLibre: true,
        opciones: [
          { id:"A", expr:"5\\sqrt{2}-3\\sqrt{2}+2\\sqrt{2}", justificacionCorta:"50=25·2, 18=9·2, 8=4·2; saco la raíz del cuadrado perfecto", esValida:true, feedback:"Correcto. √50=√25·√2=5√2, √18=√9·√2=3√2, √8=√4·√2=2√2." },
          { id:"B", expr:"\\sqrt{50-18+8}", justificacionCorta:"Sumo todo dentro de una sola raíz", esValida:false, feedback:"La raíz no se distribuye sobre sumas y restas: √a±√b≠√(a±b)." },
          { id:"C", expr:"25\\sqrt{2}-9\\sqrt{2}+4\\sqrt{2}", justificacionCorta:"Saco el cuadrado perfecto completo, no su raíz", esValida:false, feedback:"Si 50=25·2, lo que sale del radical es √25=5, no 25 entero." }
        ]
      },
      { prompt: "Tenés $5\\sqrt{2}-3\\sqrt{2}+2\\sqrt{2}$. ¿Cómo seguís?", pideJustificacionLibre: false,
        opciones: [
          { id:"A", expr:"4\\sqrt{2}", justificacionCorta:"Sumo los coeficientes: 5-3+2=4", esValida:true, feedback:"Correcto. Son términos semejantes (todos con √2), se suman los coeficientes." },
          { id:"B", expr:"4\\sqrt{6}", justificacionCorta:"Sumo también lo que está dentro de la raíz", esValida:false, feedback:"El √2 es común a los tres términos y no se suma; solo se suman los coeficientes que están afuera." }
        ]
      }
    ],
    formaCanonica: "4\\sqrt{2}"
  },

  // D4 (ya validado, lo reincluyo igual)
  {
    id: "D4", nivel: 1, codigo: "D4",
    explicacion: {
      titulo: "Factor común con potencias",
      formulaGeneral: "x^{m+k} = x^m \\cdot x^k",
      texto: "Cuando varios términos comparten la misma base elevada a distintos exponentes, conviene reescribir cada término como un producto que incluya la menor potencia común, para extraerla como factor común.",
      notaAplicacion: "Los dos términos comparten la base 2; convén reescribir $2^{n+3}$ y $2^{n+1}$ en términos de $2^n$."
    },
    consigna: { textoConsigna: "Demostrá que las siguientes expresiones son equivalentes para todo n.", expresionA: "2^{n+3}-2^{n+1}", expresionB: "6\\cdot 2^n" },
    pasos: [
      { prompt: "¿Cómo reescribís $2^{n+3}-2^{n+1}$ para sacar factor común?", pideJustificacionLibre: true,
        opciones: [
          { id:"A", expr:"2^n(2^3-2^1)", justificacionCorta:"Separo cada potencia como 2^n por el exponente restante", esValida:true, feedback:"Correcto. 2^{n+3}=2^n·2^3 y 2^{n+1}=2^n·2^1." },
          { id:"B", expr:"2^n(3-1)", justificacionCorta:"Resto directamente los exponentes 3 y 1", esValida:false, feedback:"Los exponentes no se restan así fuera de una división de potencias de igual base." },
          { id:"C", expr:"2^{2n+4}", justificacionCorta:"Sumo las potencias como si se multiplicaran", esValida:false, feedback:"x^a·x^b=x^{a+b} es para producto, no para resta de dos términos." }
        ]
      },
      { prompt: "Tenés $2^n(2^3-2^1)$. ¿Cómo seguís?", pideJustificacionLibre: false,
        opciones: [
          { id:"A", expr:"2^n\\cdot 6", justificacionCorta:"Calculo 2³-2¹=8-2=6", esValida:true, feedback:"Correcto. 2³=8, 2¹=2, 8−2=6." },
          { id:"B", expr:"2^n\\cdot 2^2", justificacionCorta:"Resto los exponentes 3-1=2", esValida:false, feedback:"2³−2¹ es una resta de números (8−2), no una potencia 2²." }
        ]
      }
    ],
    formaCanonica: "6\\cdot 2^n"
  },

  // D5: (x²-9)/(x+3) ≡ x-3
  {
    id: "D5", nivel: 1, codigo: "D5",
    explicacion: {
      titulo: "Diferencia de cuadrados",
      formulaGeneral: "a^2-b^2=(a-b)(a+b)",
      texto: "Igual que en el caso de x²−1, cualquier resta de dos cuadrados perfectos se factoriza como producto de la suma por la diferencia de las bases.",
      notaAplicacion: "$x^2-9=x^2-3^2$, con $a=x$, $b=3$."
    },
    consigna: { textoConsigna: "Demostrá que las siguientes expresiones son equivalentes para x≠−3.", expresionA: "\\dfrac{x^2-9}{x+3}", expresionB: "x-3" },
    pasos: [
      { prompt: "¿Cómo factorizás el numerador $x^2-9$?", pideJustificacionLibre: true,
        opciones: [
          { id:"A", expr:"(x-3)(x+3)", justificacionCorta:"Diferencia de cuadrados con a=x, b=3", esValida:true, feedback:"Correcto. x²−9=x²−3²=(x−3)(x+3)." },
          { id:"B", expr:"(x-9)(x+1)", justificacionCorta:"Busco dos números que sumen al coeficiente del medio", esValida:false, feedback:"x²−9 no tiene término lineal en x; no se factoriza buscando una suma de raíces como en x²+bx+c." },
          { id:"C", expr:"(x-3)^2", justificacionCorta:"Lo trato como cuadrado perfecto", esValida:false, feedback:"x²−9 no es un cuadrado perfecto: le falta el término del medio −6x que tendría (x−3)²." }
        ]
      },
      { prompt: "Tenés $\\dfrac{(x-3)(x+3)}{x+3}$. ¿Cómo seguís?", pideJustificacionLibre: false,
        opciones: [
          { id:"A", expr:"x-3", justificacionCorta:"Cancelo el factor (x+3) común", esValida:true, feedback:"Correcto. (x+3) se cancela porque x≠−3." },
          { id:"B", expr:"x-3-(x+3)", justificacionCorta:"Resto el denominador en vez de cancelarlo", esValida:false, feedback:"Estás en una división, no en una resta. Hay que cancelar el factor, no restarlo." }
        ]
      }
    ],
    formaCanonica: "x-3"
  },

  // D6: 1/(x-1) - 1/x ≡ 1/(x²-x)
  {
    id: "D6", nivel: 1, codigo: "D6",
    explicacion: {
      titulo: "Común denominador",
      formulaGeneral: "\\dfrac{a}{b}-\\dfrac{c}{d}=\\dfrac{ad-bc}{bd}",
      texto: "Para restar fracciones con distinto denominador, se multiplican cruzado y se restan los numeradores resultantes sobre el producto de los denominadores.",
      notaAplicacion: "El denominador común es $x(x-1)$, que distribuido da $x^2-x$."
    },
    consigna: { textoConsigna: "Demostrá que las siguientes expresiones son equivalentes para x≠0, x≠1.", expresionA: "\\dfrac{1}{x-1}-\\dfrac{1}{x}", expresionB: "\\dfrac{1}{x^2-x}" },
    pasos: [
      { prompt: "¿Cuál es el común denominador y qué queda en el numerador?", pideJustificacionLibre: true,
        opciones: [
          { id:"A", expr:"\\dfrac{x-(x-1)}{x(x-1)}", justificacionCorta:"Denominador x(x-1); numeradores cruzados x y (x-1)", esValida:true, feedback:"Correcto. Multiplicás cada numerador por el denominador que le falta." },
          { id:"B", expr:"\\dfrac{1-1}{(x-1)-x}", justificacionCorta:"Resto numeradores y denominadores por separado", esValida:false, feedback:"No se restan numeradores y denominadores de forma independiente al combinar fracciones." }
        ]
      },
      { prompt: "Tenés $\\dfrac{x-(x-1)}{x(x-1)}$. ¿Qué te queda al simplificar?", pideJustificacionLibre: false,
        opciones: [
          { id:"A", expr:"\\dfrac{1}{x^2-x}", justificacionCorta:"x-(x-1)=1, y x(x-1)=x²-x", esValida:true, feedback:"Correcto. El numerador se reduce a 1." },
          { id:"B", expr:"\\dfrac{2x-1}{x^2-x}", justificacionCorta:"Sumo x y (x-1) en vez de restar", esValida:false, feedback:"La consigna pide x menos (x-1), no x más (x-1)." }
        ]
      }
    ],
    formaCanonica: "\\dfrac{1}{x^2-x}"
  },

  // D7: √27 + √12 ≡ 5√3
  {
    id: "D7", nivel: 1, codigo: "D7",
    explicacion: {
      titulo: "Simplificación de radicales",
      formulaGeneral: "\\sqrt{a\\cdot b} = \\sqrt{a}\\cdot\\sqrt{b}",
      texto: "Para sumar radicales hay que simplificarlos primero hasta que queden con el mismo número dentro de la raíz, y ahí sí sumar los coeficientes de afuera.",
      notaAplicacion: "27=9·3 y 12=4·3: ambos comparten el factor 3 dentro de la raíz."
    },
    consigna: { textoConsigna: "Demostrá que las siguientes expresiones son equivalentes.", expresionA: "\\sqrt{27}+\\sqrt{12}", expresionB: "5\\sqrt{3}" },
    pasos: [
      { prompt: "¿Cómo se simplifica cada radical?", pideJustificacionLibre: true,
        opciones: [
          { id:"A", expr:"3\\sqrt{3}+2\\sqrt{3}", justificacionCorta:"27=9·3, 12=4·3; saco la raíz del cuadrado perfecto", esValida:true, feedback:"Correcto. √27=√9·√3=3√3, √12=√4·√3=2√3." },
          { id:"B", expr:"\\sqrt{27+12}", justificacionCorta:"Sumo dentro de una sola raíz", esValida:false, feedback:"La raíz no se distribuye sobre sumas: √a+√b≠√(a+b)." },
          { id:"C", expr:"9\\sqrt{3}+4\\sqrt{3}", justificacionCorta:"Saco el cuadrado perfecto completo en vez de su raíz", esValida:false, feedback:"Si 27=9·3, lo que sale del radical es √9=3, no el 9 entero." }
        ]
      },
      { prompt: "Tenés $3\\sqrt{3}+2\\sqrt{3}$. ¿Cómo seguís?", pideJustificacionLibre: false,
        opciones: [
          { id:"A", expr:"5\\sqrt{3}", justificacionCorta:"Sumo los coeficientes: 3+2=5", esValida:true, feedback:"Correcto, son términos semejantes con √3." },
          { id:"B", expr:"5\\sqrt{6}", justificacionCorta:"Sumo también lo de adentro de la raíz", esValida:false, feedback:"El √3 es común y no se suma, solo se suman los coeficientes de afuera." }
        ]
      }
    ],
    formaCanonica: "5\\sqrt{3}"
  },

  // D8: 3^(n+2) - 3^n ≡ 8·3^n
  {
    id: "D8", nivel: 1, codigo: "D8",
    explicacion: {
      titulo: "Factor común con potencias",
      formulaGeneral: "x^{m+k}=x^m\\cdot x^k",
      texto: "Cuando dos términos comparten la misma base con exponentes que difieren en una constante, se reescribe cada término en función de la menor potencia para extraerla como factor común.",
      notaAplicacion: "$3^{n+2}=3^n\\cdot3^2$, así que $3^n$ es el factor común con $3^n$ del segundo término."
    },
    consigna: { textoConsigna: "Demostrá que las siguientes expresiones son equivalentes para todo n.", expresionA: "3^{n+2}-3^n", expresionB: "8\\cdot 3^n" },
    pasos: [
      { prompt: "¿Cómo reescribís $3^{n+2}-3^n$ para sacar factor común?", pideJustificacionLibre: true,
        opciones: [
          { id:"A", expr:"3^n(3^2-1)", justificacionCorta:"Separo 3^{n+2} como 3^n·3², y 3^n queda factor común con el segundo término", esValida:true, feedback:"Correcto. 3^{n+2}=3^n·9, y el segundo término ya es 3^n=3^n·1." },
          { id:"B", expr:"3^n(2-1)", justificacionCorta:"Resto los exponentes directamente", esValida:false, feedback:"Los exponentes no se restan fuera de una división de potencias de igual base." },
          { id:"C", expr:"3^{n}\\cdot 3^{2-n}", justificacionCorta:"Divido las potencias en vez de restarlas", esValida:false, feedback:"Estás en una resta de dos términos, no en una división." }
        ]
      },
      { prompt: "Tenés $3^n(3^2-1)$. ¿Cómo seguís?", pideJustificacionLibre: false,
        opciones: [
          { id:"A", expr:"3^n\\cdot 8", justificacionCorta:"Calculo 3²-1=9-1=8", esValida:true, feedback:"Correcto. 3²=9, 9−1=8." },
          { id:"B", expr:"3^n\\cdot 3", justificacionCorta:"Resto los exponentes 2-1=1", esValida:false, feedback:"3²−1 es una resta de números (9−1), no una potencia 3¹." }
        ]
      }
    ],
    formaCanonica: "8\\cdot 3^n"
  },

  // D9: (2x+4)/2 ≡ x+2
  {
    id: "D9", nivel: 1, codigo: "D9",
    explicacion: {
      titulo: "Factor común y cancelación",
      formulaGeneral: "\\dfrac{ka}{k}=a \\quad (k\\neq 0)",
      texto: "Cuando todos los términos del numerador comparten un factor que también está en el denominador, se puede extraer ese factor y cancelarlo directamente.",
      notaAplicacion: "Tanto $2x$ como $4$ son múltiplos de 2, así que se puede sacar 2 como factor común en el numerador."
    },
    consigna: { textoConsigna: "Demostrá que las siguientes expresiones son equivalentes.", expresionA: "\\dfrac{2x+4}{2}", expresionB: "x+2" },
    pasos: [
      { prompt: "¿Cómo simplificás $\\dfrac{2x+4}{2}$?", pideJustificacionLibre: true,
        opciones: [
          { id:"A", expr:"\\dfrac{2(x+2)}{2}=x+2", justificacionCorta:"Saco 2 como factor común en el numerador y cancelo", esValida:true, feedback:"Correcto. 2x+4=2(x+2), y el 2 se cancela con el denominador." },
          { id:"B", expr:"x+4", justificacionCorta:"Cancelo el 2 solo en el primer término", esValida:false, feedback:"No se puede cancelar el denominador con un solo término del numerador: hay que dividir toda la suma por 2." },
          { id:"C", expr:"2x+2", justificacionCorta:"Cancelo el 2 solo en el segundo término", esValida:false, feedback:"Mismo problema: el denominador 2 divide a toda la expresión 2x+4, no a un término aislado." }
        ]
      }
    ],
    formaCanonica: "x+2"
  },

  // D10: (x²+x)/x ≡ x+1
  {
    id: "D10", nivel: 1, codigo: "D10",
    explicacion: {
      titulo: "Factor común y cancelación",
      formulaGeneral: "\\dfrac{ka}{k}=a \\quad (k\\neq 0)",
      texto: "Cuando todos los términos del numerador comparten un factor variable, se extrae ese factor y se cancela con el denominador, siempre que la variable no se anule.",
      notaAplicacion: "Tanto $x^2$ como $x$ tienen el factor $x$ en común."
    },
    consigna: { textoConsigna: "Demostrá que las siguientes expresiones son equivalentes para x≠0.", expresionA: "\\dfrac{x^2+x}{x}", expresionB: "x+1" },
    pasos: [
      { prompt: "¿Cómo simplificás $\\dfrac{x^2+x}{x}$?", pideJustificacionLibre: true,
        opciones: [
          { id:"A", expr:"\\dfrac{x(x+1)}{x}=x+1", justificacionCorta:"Saco x como factor común en el numerador y cancelo", esValida:true, feedback:"Correcto. x²+x=x(x+1), y x se cancela porque x≠0." },
          { id:"B", expr:"x+1+x", justificacionCorta:"Divido cada término por x y dejo el resultado sumado con x", esValida:false, feedback:"Al dividir x²+x por x, el primer término da x, no x+1; revisá esa división término a término." },
          { id:"C", expr:"x", justificacionCorta:"Cancelo el x² con el denominador y descarto el resto", esValida:false, feedback:"No se puede cancelar una parte del numerador descartando el resto: hay que dividir toda la suma por x." }
        ]
      }
    ],
    formaCanonica: "x+1"
  },

// D11 (ya validado antes)
  {
    id: "D11", nivel: 2, codigo: "D11",
    explicacion: {
      titulo: "Fracción compuesta + diferencia de cuadrados",
      formulaGeneral: "a^2-b^2=(a-b)(a+b) \\quad\\text{y}\\quad \\dfrac{\\,a/b\\,}{c/d} = \\dfrac{a}{b}\\cdot\\dfrac{d}{c}",
      texto: "Una fracción compuesta se simplifica primero llevando numerador y denominador a una sola fracción cada uno, y después dividiendo fracciones multiplicando por el recíproco del denominador.",
      notaAplicacion: "El denominador $1-1/x^2$ se factoriza con diferencia de cuadrados una vez que esté como una sola fracción."
    },
    consigna: { textoConsigna: "Demostrá que las siguientes expresiones son equivalentes para x≠0,−1.", expresionA: "\\dfrac{1-\\frac{1}{x}}{1-\\frac{1}{x^2}}", expresionB: "\\dfrac{x}{x+1}" },
    pasos: [
      { prompt: "Llevá numerador y denominador a una sola fracción cada uno. ¿Qué obtenés?", pideJustificacionLibre: false,
        opciones: [
          { id:"A", expr:"\\dfrac{\\frac{x-1}{x}}{\\frac{x^2-1}{x^2}}", justificacionCorta:"Común denominador en numerador (x) y en denominador (x²) por separado", esValida:true, feedback:"Correcto. 1-1/x=(x-1)/x, y 1-1/x²=(x²-1)/x²." },
          { id:"B", expr:"\\dfrac{x-1}{x^2-1}", justificacionCorta:"Resto directamente sin común denominador", esValida:false, feedback:"No se puede restar 1 menos una fracción sin antes igualar denominadores en cada nivel." },
          { id:"C", expr:"\\dfrac{\\frac{1}{x}-1}{\\frac{1}{x^2}-1}", justificacionCorta:"Cambio el orden de la resta", esValida:false, feedback:"Cambiar el orden de la resta altera el signo del resultado." }
        ]
      },
      { prompt: "Tenés $\\dfrac{(x-1)/x}{(x^2-1)/x^2}$. ¿Cómo seguís?", pideJustificacionLibre: true,
        opciones: [
          { id:"A", expr:"\\dfrac{x-1}{x}\\cdot\\dfrac{x^2}{x^2-1}", justificacionCorta:"Divido fracciones multiplicando por el recíproco del denominador", esValida:true, feedback:"Correcto. Dividir por una fracción es multiplicar por su recíproco." },
          { id:"B", expr:"\\dfrac{x-1}{x}\\cdot\\dfrac{x^2-1}{x^2}", justificacionCorta:"Multiplico numerador por numerador directamente", esValida:false, feedback:"Hay que invertir la fracción del denominador antes de multiplicar, no usarla tal cual." }
        ]
      },
      { prompt: "Tenés $\\dfrac{x-1}{x}\\cdot\\dfrac{x^2}{x^2-1}$. Factorizá $x^2-1$ y simplificá. ¿Qué te queda?", pideJustificacionLibre: false,
        opciones: [
          { id:"A", expr:"\\dfrac{x}{x+1}", justificacionCorta:"x²-1=(x-1)(x+1); cancelo (x-1) y simplifico x²/x", esValida:true, feedback:"Correcto. x²−1=(x−1)(x+1); cancelás (x−1) y de x²/x queda x." },
          { id:"B", expr:"\\dfrac{x-1}{x+1}", justificacionCorta:"Cancelo (x-1) pero olvido simplificar x²/x", esValida:false, feedback:"Falta simplificar x²/x, que da x, no 1." }
        ]
      }
    ],
    formaCanonica: "\\dfrac{x}{x+1}"
  },

  // D12: 1/(√3-√2) ≡ √3+√2
  {
    id: "D12", nivel: 2, codigo: "D12",
    explicacion: {
      titulo: "Racionalización con conjugado",
      formulaGeneral: "\\dfrac{1}{\\sqrt{a}-\\sqrt{b}}\\cdot\\dfrac{\\sqrt{a}+\\sqrt{b}}{\\sqrt{a}+\\sqrt{b}}=\\dfrac{\\sqrt{a}+\\sqrt{b}}{a-b}",
      texto: "Para eliminar una resta de raíces en el denominador, se multiplica por el conjugado (la misma expresión con el signo del medio cambiado), usando que (√a−√b)(√a+√b)=a−b.",
      notaAplicacion: "El conjugado de $\\sqrt{3}-\\sqrt{2}$ es $\\sqrt{3}+\\sqrt{2}$."
    },
    consigna: { textoConsigna: "Demostrá que las siguientes expresiones son equivalentes.", expresionA: "\\dfrac{1}{\\sqrt{3}-\\sqrt{2}}", expresionB: "\\sqrt{3}+\\sqrt{2}" },
    pasos: [
      { prompt: "¿Por qué expresión multiplicás arriba y abajo para racionalizar?", pideJustificacionLibre: true,
        opciones: [
          { id:"A", expr:"\\dfrac{\\sqrt{3}+\\sqrt{2}}{\\sqrt{3}+\\sqrt{2}}", justificacionCorta:"Multiplico por el conjugado del denominador", esValida:true, feedback:"Correcto. El conjugado de √3−√2 es √3+√2." },
          { id:"B", expr:"\\dfrac{\\sqrt{3}-\\sqrt{2}}{\\sqrt{3}-\\sqrt{2}}", justificacionCorta:"Multiplico por la misma expresión del denominador", esValida:false, feedback:"Multiplicar por la misma expresión (no el conjugado) no elimina la raíz: (√3−√2)² sigue teniendo raíces." }
        ]
      },
      { prompt: "Tenés $\\dfrac{1}{\\sqrt{3}-\\sqrt{2}}\\cdot\\dfrac{\\sqrt{3}+\\sqrt{2}}{\\sqrt{3}+\\sqrt{2}}$. ¿Qué te queda en el denominador?", pideJustificacionLibre: false,
        opciones: [
          { id:"A", expr:"3-2=1", justificacionCorta:"(√3-√2)(√3+√2)=3-2, diferencia de cuadrados", esValida:true, feedback:"Correcto. (√a-√b)(√a+√b)=a-b, con a=3, b=2." },
          { id:"B", expr:"3+2=5", justificacionCorta:"Sumo los dos números en vez de restarlos", esValida:false, feedback:"La diferencia de cuadrados (√a-√b)(√a+√b) da a-b, no a+b." }
        ]
      }
    ],
    formaCanonica: "\\sqrt{3}+\\sqrt{2}"
  },

  // D13: (x³-8)/(x-2) ≡ x²+2x+4
  {
    id: "D13", nivel: 2, codigo: "D13",
    explicacion: {
      titulo: "Diferencia de cubos",
      formulaGeneral: "a^3-b^3=(a-b)(a^2+ab+b^2)",
      texto: "Una resta de dos cubos perfectos se factoriza como el producto de la diferencia de las bases por un trinomio especial (no es el cuadrado del binomio).",
      notaAplicacion: "$x^3-8=x^3-2^3$, con $a=x$, $b=2$."
    },
    consigna: { textoConsigna: "Demostrá que las siguientes expresiones son equivalentes para x≠2.", expresionA: "\\dfrac{x^3-8}{x-2}", expresionB: "x^2+2x+4" },
    pasos: [
      { prompt: "¿Cómo factorizás el numerador $x^3-8$?", pideJustificacionLibre: true,
        opciones: [
          { id:"A", expr:"(x-2)(x^2+2x+4)", justificacionCorta:"Diferencia de cubos con a=x, b=2", esValida:true, feedback:"Correcto. x³−8=x³−2³=(x−2)(x²+2x+4)." },
          { id:"B", expr:"(x-2)^3", justificacionCorta:"Lo trato como cubo de un binomio", esValida:false, feedback:"x³−8 no es el desarrollo de (x−2)³, que tendría términos −6x²+12x adicionales." },
          { id:"C", expr:"(x-2)(x^2-2x+4)", justificacionCorta:"Pongo signo menos en el término ab del trinomio", esValida:false, feedback:"En la diferencia de cubos, el trinomio es a²+ab+b² (todo positivo salvo el signo de afuera), no a²−ab+b²." }
        ]
      },
      { prompt: "Tenés $\\dfrac{(x-2)(x^2+2x+4)}{x-2}$. ¿Cómo seguís?", pideJustificacionLibre: false,
        opciones: [
          { id:"A", expr:"x^2+2x+4", justificacionCorta:"Cancelo el factor (x-2) común", esValida:true, feedback:"Correcto. (x−2) se cancela porque x≠2." },
          { id:"B", expr:"x^2+2x+2", justificacionCorta:"Cancelo y resto 2 del término constante", esValida:false, feedback:"Al cancelar (x−2), el trinomio queda intacto, no se le resta nada adicional." }
        ]
      }
    ],
    formaCanonica: "x^2+2x+4"
  },

  // D14: (3^(n+1)+3^n)/(3^(n+1)-3^n) ≡ 2
  {
    id: "D14", nivel: 2, codigo: "D14",
    explicacion: {
      titulo: "Factor común con potencias",
      formulaGeneral: "x^{m+k}=x^m\\cdot x^k",
      texto: "Cuando numerador y denominador comparten el mismo factor de potencia, conviene extraerlo en ambos para poder cancelarlo y quedarse con una expresión numérica simple.",
      notaAplicacion: "Tanto arriba como abajo aparece $3^{n+1}$ y $3^n$; en ambos casos $3^n$ es factor común."
    },
    consigna: { textoConsigna: "Demostrá que las siguientes expresiones son equivalentes para todo n.", expresionA: "\\dfrac{3^{n+1}+3^n}{3^{n+1}-3^n}", expresionB: "2" },
    pasos: [
      { prompt: "Sacá factor común $3^n$ en numerador y denominador. ¿Qué obtenés?", pideJustificacionLibre: true,
        opciones: [
          { id:"A", expr:"\\dfrac{3^n(3+1)}{3^n(3-1)}", justificacionCorta:"3^{n+1}=3^n·3 en ambos casos; 3^n queda factor común", esValida:true, feedback:"Correcto. 3^{n+1}=3^n·3, así que tanto arriba como abajo se puede extraer 3^n." },
          { id:"B", expr:"\\dfrac{3^{n}(n+1+1)}{3^{n}(n+1-1)}", justificacionCorta:"Trato el exponente n+1 como una multiplicación de n por 1", esValida:false, feedback:"n+1 es un exponente, no se reparte como producto con el resto de la expresión." }
        ]
      },
      { prompt: "Tenés $\\dfrac{3^n(3+1)}{3^n(3-1)}$. ¿Cómo seguís?", pideJustificacionLibre: false,
        opciones: [
          { id:"A", expr:"\\dfrac{4}{2}=2", justificacionCorta:"Cancelo 3^n y calculo 4/2", esValida:true, feedback:"Correcto. 3^n se cancela, y queda (3+1)/(3-1)=4/2=2." },
          { id:"B", expr:"\\dfrac{3+1}{3-1}\\cdot 3^n", justificacionCorta:"Cancelo solo parcialmente, dejando un 3^n suelto", esValida:false, feedback:"3^n aparece como factor multiplicando en numerador y denominador por igual, así que se cancela por completo, no queda ningún resto." }
        ]
      }
    ],
    formaCanonica: "2"
  },

  // D15: (8x^6)^(2/3) / (4x^2) ≡ x²
  {
    id: "D15", nivel: 2, codigo: "D15",
    explicacion: {
      titulo: "Potencia de un producto y exponentes fraccionarios",
      formulaGeneral: "(xy)^n=x^ny^n \\quad\\text{y}\\quad (x^m)^n=x^{mn}",
      texto: "Una potencia que afecta a un producto se distribuye sobre cada factor, y al elevar una potencia a otra potencia, los exponentes se multiplican.",
      notaAplicacion: "$(8x^6)^{2/3}$ se distribuye en $8^{2/3}$ y $(x^6)^{2/3}$."
    },
    consigna: { textoConsigna: "Demostrá que las siguientes expresiones son equivalentes para x>0.", expresionA: "\\dfrac{(8x^6)^{2/3}}{4x^2}", expresionB: "x^2" },
    pasos: [
      { prompt: "¿Cómo se simplifica $(8x^6)^{2/3}$?", pideJustificacionLibre: true,
        opciones: [
          { id:"A", expr:"4x^4", justificacionCorta:"8^{2/3}=4 y (x^6)^{2/3}=x^4, multiplicando exponentes", esValida:true, feedback:"Correcto. 8^{2/3}=(∛8)²=2²=4, y x^{6·2/3}=x^4." },
          { id:"B", expr:"\\dfrac{16}{3}x^4", justificacionCorta:"Trato 8^{2/3} como 8·2/3", esValida:false, feedback:"El exponente 2/3 no se reparte como una multiplicación por la base; hay que elevar 8 a la 2/3, no multiplicarlo." },
          { id:"C", expr:"4x^{12}", justificacionCorta:"Multiplico los exponentes 6 y 2/3 mal, sumándolos en vez de multiplicarlos", esValida:false, feedback:"(x^m)^n=x^{mn}, hay que multiplicar 6 por 2/3 (=4), no sumar." }
        ]
      },
      { prompt: "Tenés $\\dfrac{4x^4}{4x^2}$. ¿Cómo seguís?", pideJustificacionLibre: false,
        opciones: [
          { id:"A", expr:"x^2", justificacionCorta:"Cancelo el 4 y resto exponentes: x^{4-2}=x²", esValida:true, feedback:"Correcto. 4/4=1 y x^4/x^2=x^{4-2}=x²." },
          { id:"B", expr:"x^8", justificacionCorta:"Multiplico los exponentes en vez de restarlos", esValida:false, feedback:"Al dividir potencias de igual base se restan los exponentes (x^m/x^n=x^{m-n}), no se multiplican." }
        ]
      }
    ],
    formaCanonica: "x^2"
  },

  // D16: (√x-1)/(x-1) ≡ 1/(√x+1)
  {
    id: "D16", nivel: 2, codigo: "D16",
    explicacion: {
      titulo: "Diferencia de cuadrados con raíces",
      formulaGeneral: "a^2-b^2=(a-b)(a+b)",
      texto: "Si una expresión tiene una raíz cuadrada al cuadrado, esa raíz se puede pensar como la base 'a' de una diferencia de cuadrados, ya que $(\\sqrt{x})^2=x$.",
      notaAplicacion: "$x-1=(\\sqrt{x})^2-1^2$, con $a=\\sqrt{x}$, $b=1$."
    },
    consigna: { textoConsigna: "Demostrá que las siguientes expresiones son equivalentes para x>0, x≠1.", expresionA: "\\dfrac{\\sqrt{x}-1}{x-1}", expresionB: "\\dfrac{1}{\\sqrt{x}+1}" },
    pasos: [
      { prompt: "¿Cómo factorizás el denominador $x-1$ pensándolo en términos de $\\sqrt{x}$?", pideJustificacionLibre: true,
        opciones: [
          { id:"A", expr:"(\\sqrt{x}-1)(\\sqrt{x}+1)", justificacionCorta:"x-1=(√x)²-1²; diferencia de cuadrados con a=√x, b=1", esValida:true, feedback:"Correcto. (√x)²=x, así que x−1=(√x−1)(√x+1)." },
          { id:"B", expr:"(\\sqrt{x}-1)^2", justificacionCorta:"Lo trato como cuadrado de un binomio", esValida:false, feedback:"x−1 no tiene el término del medio que tendría (√x−1)², que sería x−2√x+1." }
        ]
      },
      { prompt: "Tenés $\\dfrac{\\sqrt{x}-1}{(\\sqrt{x}-1)(\\sqrt{x}+1)}$. ¿Cómo seguís?", pideJustificacionLibre: false,
        opciones: [
          { id:"A", expr:"\\dfrac{1}{\\sqrt{x}+1}", justificacionCorta:"Cancelo el factor (√x-1) común", esValida:true, feedback:"Correcto. (√x−1) se cancela porque x≠1." },
          { id:"B", expr:"\\dfrac{\\sqrt{x}}{\\sqrt{x}+1}", justificacionCorta:"Cancelo el -1 pero dejo el √x", esValida:false, feedback:"El factor que se cancela es (√x−1) completo, no solo la parte numérica." }
        ]
      }
    ],
    formaCanonica: "\\dfrac{1}{\\sqrt{x}+1}"
  },

  // D17: (1+1/x)/(1-1/x²) ≡ x/(x-1)
  {
    id: "D17", nivel: 2, codigo: "D17",
    explicacion: {
      titulo: "Fracción compuesta + diferencia de cuadrados",
      formulaGeneral: "a^2-b^2=(a-b)(a+b) \\quad\\text{y}\\quad \\dfrac{\\,a/b\\,}{c/d}=\\dfrac{a}{b}\\cdot\\dfrac{d}{c}",
      texto: "Igual que en D11, primero se reduce cada nivel de la fracción compuesta a una sola fracción, y después se divide multiplicando por el recíproco.",
      notaAplicacion: "Acá el numerador suma (en vez de restar), así que el resultado final va a tener signo distinto al de D11."
    },
    consigna: { textoConsigna: "Demostrá que las siguientes expresiones son equivalentes para x≠0,1.", expresionA: "\\dfrac{1+\\frac{1}{x}}{1-\\frac{1}{x^2}}", expresionB: "\\dfrac{x}{x-1}" },
    pasos: [
      { prompt: "Llevá numerador y denominador a una sola fracción cada uno. ¿Qué obtenés?", pideJustificacionLibre: false,
        opciones: [
          { id:"A", expr:"\\dfrac{\\frac{x+1}{x}}{\\frac{x^2-1}{x^2}}", justificacionCorta:"Común denominador en numerador (x) y denominador (x²)", esValida:true, feedback:"Correcto. 1+1/x=(x+1)/x, y 1-1/x²=(x²-1)/x²." },
          { id:"B", expr:"\\dfrac{x+1}{x^2-1}", justificacionCorta:"Resto y sumo directamente sin común denominador", esValida:false, feedback:"Hay que poner cada nivel sobre un denominador común antes de operar." }
        ]
      },
      { prompt: "Tenés $\\dfrac{(x+1)/x}{(x^2-1)/x^2}$. ¿Cómo seguís?", pideJustificacionLibre: true,
        opciones: [
          { id:"A", expr:"\\dfrac{x+1}{x}\\cdot\\dfrac{x^2}{x^2-1}", justificacionCorta:"Multiplico por el recíproco del denominador", esValida:true, feedback:"Correcto. Dividir por una fracción es multiplicar por su recíproco." },
          { id:"B", expr:"\\dfrac{x+1}{x}\\cdot\\dfrac{x^2-1}{x^2}", justificacionCorta:"Multiplico sin invertir el denominador", esValida:false, feedback:"Hay que invertir la fracción del denominador, no usarla tal cual." }
        ]
      },
      { prompt: "Tenés $\\dfrac{x+1}{x}\\cdot\\dfrac{x^2}{x^2-1}$. Factorizá $x^2-1$ y simplificá. ¿Qué te queda?", pideJustificacionLibre: false,
        opciones: [
          { id:"A", expr:"\\dfrac{x}{x-1}", justificacionCorta:"x²-1=(x-1)(x+1); cancelo (x+1) y simplifico x²/x", esValida:true, feedback:"Correcto. x²−1=(x−1)(x+1); cancelás (x+1) y de x²/x queda x." },
          { id:"B", expr:"\\dfrac{x+1}{x-1}", justificacionCorta:"Cancelo (x+1) pero olvido simplificar x²/x", esValida:false, feedback:"Falta simplificar x²/x, que da x, no 1." }
        ]
      }
    ],
    formaCanonica: "\\dfrac{x}{x-1}"
  },

  // D18: 1/(√5+√2) ≡ (√5-√2)/3
  {
    id: "D18", nivel: 2, codigo: "D18",
    explicacion: {
      titulo: "Racionalización con conjugado",
      formulaGeneral: "\\dfrac{1}{\\sqrt{a}+\\sqrt{b}}\\cdot\\dfrac{\\sqrt{a}-\\sqrt{b}}{\\sqrt{a}-\\sqrt{b}}=\\dfrac{\\sqrt{a}-\\sqrt{b}}{a-b}",
      texto: "Cuando el denominador tiene una suma de raíces, el conjugado es la misma expresión con la resta, y al multiplicar queda una diferencia de cuadrados sin raíces.",
      notaAplicacion: "El conjugado de $\\sqrt{5}+\\sqrt{2}$ es $\\sqrt{5}-\\sqrt{2}$."
    },
    consigna: { textoConsigna: "Demostrá que las siguientes expresiones son equivalentes.", expresionA: "\\dfrac{1}{\\sqrt{5}+\\sqrt{2}}", expresionB: "\\dfrac{\\sqrt{5}-\\sqrt{2}}{3}" },
    pasos: [
      { prompt: "¿Por qué expresión multiplicás arriba y abajo?", pideJustificacionLibre: true,
        opciones: [
          { id:"A", expr:"\\dfrac{\\sqrt{5}-\\sqrt{2}}{\\sqrt{5}-\\sqrt{2}}", justificacionCorta:"Multiplico por el conjugado del denominador", esValida:true, feedback:"Correcto. El conjugado de √5+√2 es √5−√2." },
          { id:"B", expr:"\\dfrac{\\sqrt{5}+\\sqrt{2}}{\\sqrt{5}+\\sqrt{2}}", justificacionCorta:"Multiplico por la misma expresión, no el conjugado", esValida:false, feedback:"Multiplicar por la misma expresión deja (√5+√2)² en el denominador, que sigue teniendo raíces." }
        ]
      },
      { prompt: "Tenés $\\dfrac{1}{\\sqrt{5}+\\sqrt{2}}\\cdot\\dfrac{\\sqrt{5}-\\sqrt{2}}{\\sqrt{5}-\\sqrt{2}}$. ¿Qué obtenés?", pideJustificacionLibre: false,
        opciones: [
          { id:"A", expr:"\\dfrac{\\sqrt{5}-\\sqrt{2}}{3}", justificacionCorta:"Denominador: 5-2=3; numerador queda √5-√2", esValida:true, feedback:"Correcto. (√5+√2)(√5−√2)=5−2=3." },
          { id:"B", expr:"\\dfrac{\\sqrt{5}-\\sqrt{2}}{7}", justificacionCorta:"Sumo 5+2 en el denominador en vez de restar", esValida:false, feedback:"La diferencia de cuadrados da a−b, no a+b: 5−2=3." }
        ]
      }
    ],
    formaCanonica: "\\dfrac{\\sqrt{5}-\\sqrt{2}}{3}"
  },

  // D19: (x³+27)/(x+3) ≡ x²-3x+9
  {
    id: "D19", nivel: 2, codigo: "D19",
    explicacion: {
      titulo: "Suma de cubos",
      formulaGeneral: "a^3+b^3=(a+b)(a^2-ab+b^2)",
      texto: "Una suma de dos cubos perfectos se factoriza como el producto de la suma de las bases por un trinomio especial, con signo negativo en el término del medio.",
      notaAplicacion: "$x^3+27=x^3+3^3$, con $a=x$, $b=3$."
    },
    consigna: { textoConsigna: "Demostrá que las siguientes expresiones son equivalentes para x≠−3.", expresionA: "\\dfrac{x^3+27}{x+3}", expresionB: "x^2-3x+9" },
    pasos: [
      { prompt: "¿Cómo factorizás el numerador $x^3+27$?", pideJustificacionLibre: true,
        opciones: [
          { id:"A", expr:"(x+3)(x^2-3x+9)", justificacionCorta:"Suma de cubos con a=x, b=3", esValida:true, feedback:"Correcto. x³+27=x³+3³=(x+3)(x²−3x+9)." },
          { id:"B", expr:"(x+3)(x^2+3x+9)", justificacionCorta:"Pongo signo positivo en el término ab del trinomio", esValida:false, feedback:"En la suma de cubos, el trinomio es a²−ab+b² (con signo negativo en el término medio), no a²+ab+b²." },
          { id:"C", expr:"(x+3)^3", justificacionCorta:"Lo trato como cubo de un binomio", esValida:false, feedback:"x³+27 no es el desarrollo de (x+3)³, que tendría términos adicionales 9x²+27x." }
        ]
      },
      { prompt: "Tenés $\\dfrac{(x+3)(x^2-3x+9)}{x+3}$. ¿Cómo seguís?", pideJustificacionLibre: false,
        opciones: [
          { id:"A", expr:"x^2-3x+9", justificacionCorta:"Cancelo el factor (x+3) común", esValida:true, feedback:"Correcto. (x+3) se cancela porque x≠−3." },
          { id:"B", expr:"x^2-3x+3", justificacionCorta:"Cancelo y resto 6 al término constante", esValida:false, feedback:"Al cancelar (x+3), el trinomio queda igual, sin modificaciones adicionales." }
        ]
      }
    ],
    formaCanonica: "x^2-3x+9"
  },

  // D20: (2^(n+2)+2^n)/2^n ≡ 5
  {
    id: "D20", nivel: 2, codigo: "D20",
    explicacion: {
      titulo: "Factor común con potencias",
      formulaGeneral: "x^{m+k}=x^m\\cdot x^k",
      texto: "Cuando todos los términos comparten el mismo factor de potencia, se extrae ese factor en el numerador para cancelarlo con el denominador y quedarse con un número.",
      notaAplicacion: "$2^{n+2}=2^n\\cdot 2^2$, así que $2^n$ es factor común en todo el numerador."
    },
    consigna: { textoConsigna: "Demostrá que las siguientes expresiones son equivalentes para todo n.", expresionA: "\\dfrac{2^{n+2}+2^n}{2^n}", expresionB: "5" },
    pasos: [
      { prompt: "Sacá factor común $2^n$ en el numerador. ¿Qué obtenés?", pideJustificacionLibre: true,
        opciones: [
          { id:"A", expr:"\\dfrac{2^n(2^2+1)}{2^n}", justificacionCorta:"2^{n+2}=2^n·2², y el segundo término ya es 2^n·1", esValida:true, feedback:"Correcto. 2^{n+2}=2^n·4, y el otro término es 2^n." },
          { id:"B", expr:"\\dfrac{2^n(n+2+n)}{2^n}", justificacionCorta:"Sumo los exponentes como si fueran términos lineales", esValida:false, feedback:"Los exponentes n+2 y n no se suman entre sí como números separados de la base." }
        ]
      },
      { prompt: "Tenés $\\dfrac{2^n(2^2+1)}{2^n}$. ¿Cómo seguís?", pideJustificacionLibre: false,
        opciones: [
          { id:"A", expr:"2^2+1=5", justificacionCorta:"Cancelo 2^n y calculo 4+1", esValida:true, feedback:"Correcto. 2^n se cancela, y 2²+1=4+1=5." },
          { id:"B", expr:"2^{2+1}=8", justificacionCorta:"Sumo los exponentes 2 y 1 en vez de sumar 2²+1", esValida:false, feedback:"2²+1 es una suma de un número de potencia (4) más 1, no un exponente nuevo." }
        ]
      }
    ],
    formaCanonica: "5"
  },

  // D21: (32x^10)^(1/5) / (2x²) ≡ 1
  {
    id: "D21", nivel: 2, codigo: "D21",
    explicacion: {
      titulo: "Potencia de un producto y exponentes fraccionarios",
      formulaGeneral: "(xy)^n=x^ny^n \\quad\\text{y}\\quad (x^m)^n=x^{mn}",
      texto: "Igual que en D15, la potencia que afecta a un producto se distribuye sobre cada factor, y al elevar potencia a potencia, los exponentes se multiplican.",
      notaAplicacion: "$(32x^{10})^{1/5}$ se distribuye en $32^{1/5}$ y $(x^{10})^{1/5}$."
    },
    consigna: { textoConsigna: "Demostrá que las siguientes expresiones son equivalentes para x>0.", expresionA: "\\dfrac{(32x^{10})^{1/5}}{2x^2}", expresionB: "1" },
    pasos: [
      { prompt: "¿Cómo se simplifica $(32x^{10})^{1/5}$?", pideJustificacionLibre: true,
        opciones: [
          { id:"A", expr:"2x^2", justificacionCorta:"32^{1/5}=2 (raíz quinta) y (x^{10})^{1/5}=x^2, multiplicando exponentes", esValida:true, feedback:"Correcto. 32^{1/5}=∜[5]{32}=2, y x^{10·1/5}=x^2." },
          { id:"B", expr:"32x^{50}", justificacionCorta:"Multiplico el exponente 10 por 5 en vez de por 1/5", esValida:false, feedback:"El exponente exterior es 1/5, no 5; hay que multiplicar 10 por 1/5, que da 2, no 50." }
        ]
      },
      { prompt: "Tenés $\\dfrac{2x^2}{2x^2}$. ¿Qué te queda?", pideJustificacionLibre: false,
        opciones: [
          { id:"A", expr:"1", justificacionCorta:"Numerador y denominador son idénticos", esValida:true, feedback:"Correcto. Cualquier expresión no nula dividida por sí misma da 1." },
          { id:"B", expr:"x^0=0", justificacionCorta:"Resto los exponentes y obtengo x^0, que interpreto como 0", esValida:false, feedback:"x^0 es 1, no 0. Además, 2/2 también da 1, así que el resultado final es 1, no 0." }
        ]
      }
    ],
    formaCanonica: "1"
  },

  // D22: (x-9)/(√x-3) ≡ √x+3
  {
    id: "D22", nivel: 2, codigo: "D22",
    explicacion: {
      titulo: "Diferencia de cuadrados con raíces",
      formulaGeneral: "a^2-b^2=(a-b)(a+b)",
      texto: "Cuando el numerador es una resta de un número y un cuadrado perfecto, y el denominador involucra la raíz de ese número, conviene pensar al numerador como diferencia de cuadrados usando la raíz como base.",
      notaAplicacion: "$x-9=(\\sqrt{x})^2-3^2$, con $a=\\sqrt{x}$, $b=3$."
    },
    consigna: { textoConsigna: "Demostrá que las siguientes expresiones son equivalentes para x>0, x≠9.", expresionA: "\\dfrac{x-9}{\\sqrt{x}-3}", expresionB: "\\sqrt{x}+3" },
    pasos: [
      { prompt: "¿Cómo factorizás el numerador $x-9$ pensándolo en términos de $\\sqrt{x}$?", pideJustificacionLibre: true,
        opciones: [
          { id:"A", expr:"(\\sqrt{x}-3)(\\sqrt{x}+3)", justificacionCorta:"x-9=(√x)²-3²; diferencia de cuadrados con a=√x, b=3", esValida:true, feedback:"Correcto. (√x)²=x, así que x−9=(√x−3)(√x+3)." },
          { id:"B", expr:"(\\sqrt{x}-9)(\\sqrt{x}+1)", justificacionCorta:"Busco factores como si fuera un trinomio x²+bx+c", esValida:false, feedback:"x−9 no tiene término lineal en √x; es una diferencia de cuadrados directa, no un trinomio a factorizar por sus raíces." }
        ]
      },
      { prompt: "Tenés $\\dfrac{(\\sqrt{x}-3)(\\sqrt{x}+3)}{\\sqrt{x}-3}$. ¿Cómo seguís?", pideJustificacionLibre: false,
        opciones: [
          { id:"A", expr:"\\sqrt{x}+3", justificacionCorta:"Cancelo el factor (√x-3) común", esValida:true, feedback:"Correcto. (√x−3) se cancela porque x≠9." },
          { id:"B", expr:"\\sqrt{x}+3-(\\sqrt{x}-3)", justificacionCorta:"Resto el denominador en vez de cancelarlo", esValida:false, feedback:"Estás en una división, no en una resta: hay que cancelar el factor común, no restarlo." }
        ]
      }
    ],
    formaCanonica: "\\sqrt{x}+3"
  },

// D23: x⁴+4 ≡ (x²-2x+2)(x²+2x+2)
  {
    id: "D23", nivel: 3, codigo: "D23",
    explicacion: {
      titulo: "Diferencia de cuadrados disfrazada",
      formulaGeneral: "a^2-b^2=(a-b)(a+b)",
      texto: "En el Nivel 3 las identidades se prueban desarrollando un lado hasta llegar al otro. El truco más común es sumar y restar un término para armar un cuadrado perfecto escondido y aplicar diferencia de cuadrados.",
      notaAplicacion: "$x^4+4$ no es una diferencia de cuadrados a simple vista, pero sumando y restando $4x^2$ se puede armar $(x^2+2)^2$."
    },
    consigna: { textoConsigna: "Demostrá la identidad desarrollando el lado derecho hasta llegar al izquierdo (o viceversa).", expresionA: "x^4+4", expresionB: "(x^2-2x+2)(x^2+2x+2)" },
    pasos: [
      { prompt: "Para conectar $x^4+4$ con un cuadrado perfecto, ¿qué identidad intermedia conviene armar?", pideJustificacionLibre: true,
        opciones: [
          { id:"A", expr:"(x^2+2)^2-(2x)^2", justificacionCorta:"Sumo y resto 4x² para completar (x²+2)²=x⁴+4x²+4", esValida:true, feedback:"Correcto. (x²+2)²=x⁴+4x²+4. Restando 4x², queda x⁴+4." },
          { id:"B", expr:"(x^2)^2+2^2", justificacionCorta:"Trato x⁴+4 directamente como suma de cuadrados", esValida:false, feedback:"La suma de cuadrados a²+b² no se factoriza con números reales sin sumar y restar un término intermedio primero." }
        ]
      },
      { prompt: "Tenés $(x^2+2)^2-(2x)^2$. Es una diferencia de cuadrados con $a=x^2+2$, $b=2x$. ¿Cómo se factoriza?", pideJustificacionLibre: false,
        opciones: [
          { id:"A", expr:"(x^2+2-2x)(x^2+2+2x)", justificacionCorta:"a²-b²=(a-b)(a+b) con a=x²+2, b=2x", esValida:true, feedback:"Correcto. Reordenando, (x²+2-2x)=(x²-2x+2) y (x²+2+2x)=(x²+2x+2)." },
          { id:"B", expr:"(x^2+2)(x^2-2)", justificacionCorta:"Trato (2x)² como si fuera 2² nada más", esValida:false, feedback:"b en este caso es 2x, no 2; (2x)²=4x², no 4." }
        ]
      }
    ],
    formaCanonica: "(x^2-2x+2)(x^2+2x+2)"
  },

  // D24: (a+b+c)² ≡ a²+b²+c²+2ab+2bc+2ca
  {
    id: "D24", nivel: 3, codigo: "D24",
    explicacion: {
      titulo: "Cuadrado de un trinomio",
      formulaGeneral: "(a+b+c)^2 = a^2+b^2+c^2+2ab+2bc+2ca",
      texto: "El cuadrado de una suma de tres términos se desarrolla multiplicando el trinomio por sí mismo: cada término se multiplica por todos (incluido por sí mismo), generando tres cuadrados y tres dobles productos.",
      notaAplicacion: "Conviene pensar (a+b+c)² como (a+b+c)(a+b+c) y aplicar la propiedad distributiva con cuidado de no olvidar ningún término cruzado."
    },
    consigna: { textoConsigna: "Demostrá la identidad desarrollando el lado izquierdo.", expresionA: "(a+b+c)^2", expresionB: "a^2+b^2+c^2+2ab+2bc+2ca" },
    pasos: [
      { prompt: "Al multiplicar $(a+b+c)(a+b+c)$ término a término, ¿qué tipo de términos aparecen?", pideJustificacionLibre: true,
        opciones: [
          { id:"A", expr:"a^2+b^2+c^2+2ab+2ac+2bc", justificacionCorta:"Cada término al cuadrado, más el doble de cada producto cruzado distinto", esValida:true, feedback:"Correcto: aparecen los tres cuadrados a², b², c², y cada par distinto se repite dos veces (por ejemplo ab aparece como a·b y b·a), dando 2ab, 2ac y 2bc." },
          { id:"B", expr:"a^2+b^2+c^2+ab+bc+ca", justificacionCorta:"Cada cuadrado, más cada producto cruzado una sola vez", esValida:false, feedback:"Cada producto cruzado (como ab) aparece dos veces al multiplicar el trinomio por sí mismo, no una sola vez: falta el factor 2." }
        ]
      }
    ],
    formaCanonica: "a^2+b^2+c^2+2ab+2bc+2ca"
  },

  // D25: (a²+b²)(c²+d²) ≡ (ac-bd)²+(ad+bc)²  -- identidad de Brahmagupta
  {
    id: "D25", nivel: 3, codigo: "D25",
    explicacion: {
      titulo: "Identidad de Brahmagupta–Fibonacci",
      formulaGeneral: "(a^2+b^2)(c^2+d^2)=(ac-bd)^2+(ad+bc)^2",
      texto: "Esta identidad muestra que el producto de dos sumas de cuadrados es otra suma de cuadrados. Se prueba desarrollando el lado derecho y viendo que los términos cruzados con signo opuesto se cancelan.",
      notaAplicacion: "Al desarrollar $(ac-bd)^2$ y $(ad+bc)^2$ por separado, aparecen términos del tipo $-2abcd$ y $+2abcd$ que se cancelan entre sí."
    },
    consigna: { textoConsigna: "Demostrá la identidad desarrollando el lado derecho hasta llegar al izquierdo.", expresionA: "(a^2+b^2)(c^2+d^2)", expresionB: "(ac-bd)^2+(ad+bc)^2" },
    pasos: [
      { prompt: "Al desarrollar $(ac-bd)^2+(ad+bc)^2$, ¿qué pasa con los términos cruzados que tienen $abcd$?", pideJustificacionLibre: true,
        opciones: [
          { id:"A", expr:"-2abcd+2abcd=0", justificacionCorta:"El término cruzado de (ac-bd)² es -2abcd, y el de (ad+bc)² es +2abcd; se cancelan", esValida:true, feedback:"Correcto. (ac−bd)²=a²c²−2abcd+b²d², y (ad+bc)²=a²d²+2abcd+b²c². Los términos −2abcd y +2abcd se cancelan." },
          { id:"B", expr:"-4abcd", justificacionCorta:"Sumo ambos términos cruzados como si tuvieran el mismo signo", esValida:false, feedback:"Los términos cruzados tienen signos opuestos (uno negativo por el signo de ac−bd, otro positivo por ad+bc), no se suman con el mismo signo." }
        ]
      },
      { prompt: "Después de cancelar los términos cruzados, ¿qué te queda?", pideJustificacionLibre: false,
        opciones: [
          { id:"A", expr:"a^2c^2+a^2d^2+b^2c^2+b^2d^2", justificacionCorta:"Quedan los cuatro cuadrados de cada desarrollo", esValida:true, feedback:"Correcto, y agrupando: a²c²+b²d²+a²d²+b²c²=a²(c²+d²)+b²(c²+d²)=(a²+b²)(c²+d²)." },
          { id:"B", expr:"a^2c^2+b^2d^2", justificacionCorta:"Solo dejo los términos de (ac-bd)² y descarto los de (ad+bc)²", esValida:false, feedback:"Hay que sumar los cuadrados de ambos desarrollos, no descartar la mitad." }
        ]
      }
    ],
    formaCanonica: "(a^2+b^2)(c^2+d^2)"
  },

  // D26: a³+b³+c³-3abc ≡ (a+b+c)(a²+b²+c²-ab-bc-ca)
  {
    id: "D26", nivel: 3, codigo: "D26",
    explicacion: {
      titulo: "Factorización de la suma de cubos generalizada",
      formulaGeneral: "a^3+b^3+c^3-3abc=(a+b+c)(a^2+b^2+c^2-ab-bc-ca)",
      texto: "Esta identidad generaliza la suma de cubos a tres variables. Se demuestra distribuyendo el trinomio (a+b+c) sobre el segundo factor y viendo que los seis términos mixtos se cancelan de a pares.",
      notaAplicacion: "Conviene distribuir término a término y agrupar los productos que se repiten con signo opuesto, como $a^2b$ y $-a^2b$."
    },
    consigna: { textoConsigna: "Demostrá la identidad desarrollando el lado derecho.", expresionA: "a^3+b^3+c^3-3abc", expresionB: "(a+b+c)(a^2+b^2+c^2-ab-bc-ca)" },
    pasos: [
      { prompt: "Al distribuir $(a+b+c)$ sobre $(a^2+b^2+c^2-ab-bc-ca)$, ¿qué le pasa a los términos mixtos como $a^2b$ y $ab^2$?", pideJustificacionLibre: true,
        opciones: [
          { id:"A", expr:"\\text{se cancelan de a pares, quedando solo } a^3+b^3+c^3-3abc", justificacionCorta:"Cada término mixto aparece dos veces con signos opuestos y se anula", esValida:true, feedback:"Correcto. Por ejemplo, a·b² aparece al multiplicar a por b² y también −b·ab (con signo opuesto), cancelándose. Al final solo sobreviven los cubos y el término −3abc." },
          { id:"B", expr:"\\text{se duplican, quedando términos como } 2a^2b", justificacionCorta:"Sumo los términos mixtos en vez de cancelarlos", esValida:false, feedback:"Los términos mixtos aparecen con signos opuestos al distribuir (uno por la parte positiva a+b+c, otro por los términos negativos −ab−bc−ca), así que se cancelan, no se duplican." }
        ]
      }
    ],
    formaCanonica: "a^3+b^3+c^3-3abc"
  },

  // D27 (ya validado antes)
  {
    id: "D27", nivel: 3, codigo: "D27",
    explicacion: {
      titulo: "Diferencia de cuadrados disfrazada",
      formulaGeneral: "a^2-b^2=(a-b)(a+b)",
      texto: "Igual que en D23, el truco es completar un cuadrado perfecto sumando y restando un término, para poder usar diferencia de cuadrados.",
      notaAplicacion: "$x^4+x^2+1$ se conecta con $(x^2+1)^2$ sumando y restando $x^2$."
    },
    consigna: { textoConsigna: "Demostrá la identidad desarrollando el lado derecho hasta llegar al izquierdo (o viceversa).", expresionA: "x^4+x^2+1", expresionB: "(x^2+x+1)(x^2-x+1)" },
    pasos: [
      { prompt: "Para conectar $x^4+x^2+1$ con un cuadrado perfecto, ¿qué identidad intermedia conviene armar?", pideJustificacionLibre: true,
        opciones: [
          { id:"A", expr:"(x^2+1)^2-x^2", justificacionCorta:"Sumo y resto x² para completar (x²+1)²=x⁴+2x²+1", esValida:true, feedback:"Correcto. (x²+1)²=x⁴+2x²+1. Restando x², obtengo x⁴+x²+1." },
          { id:"B", expr:"(x^2)^2+1^2", justificacionCorta:"Trato x⁴+1 como suma de cuadrados, ignorando el x²", esValida:false, feedback:"La suma de cuadrados a²+b² no se factoriza con reales, y además estás descartando el término x² de la expresión original." }
        ]
      },
      { prompt: "Tenés $(x^2+1)^2-x^2$. Es una diferencia de cuadrados con $a=x^2+1$, $b=x$. ¿Cómo se factoriza?", pideJustificacionLibre: false,
        opciones: [
          { id:"A", expr:"(x^2+1-x)(x^2+1+x)", justificacionCorta:"a²-b²=(a-b)(a+b) con a=x²+1, b=x", esValida:true, feedback:"Correcto. Reordenando, (x²+1−x)=(x²−x+1) y (x²+1+x)=(x²+x+1)." },
          { id:"B", expr:"(x^2+1)(x^2-1)", justificacionCorta:"Lo trato como si fuera (x²)²-1²", esValida:false, feedback:"Acá a=x²+1 y b=x, no a=x² y b=1." }
        ]
      }
    ],
    formaCanonica: "(x^2-x+1)(x^2+x+1)"
  },

  // D28: a⁴-b⁴ ≡ (a-b)(a+b)(a²+b²)
  {
    id: "D28", nivel: 3, codigo: "D28",
    explicacion: {
      titulo: "Diferencia de cuadrados aplicada dos veces",
      formulaGeneral: "a^2-b^2=(a-b)(a+b)",
      texto: "Cuando la diferencia de cuadrados se aplica sobre una expresión que ya es, a su vez, una diferencia de cuadrados de orden mayor, conviene aplicarla dos veces sucesivas.",
      notaAplicacion: "$a^4-b^4=(a^2)^2-(b^2)^2$ es una diferencia de cuadrados con $a^2$ y $b^2$ como bases; uno de los factores resultantes vuelve a ser diferencia de cuadrados."
    },
    consigna: { textoConsigna: "Demostrá la identidad factorizando el lado izquierdo.", expresionA: "a^4-b^4", expresionB: "(a-b)(a+b)(a^2+b^2)" },
    pasos: [
      { prompt: "¿Cómo factorizás $a^4-b^4$ en un primer paso?", pideJustificacionLibre: true,
        opciones: [
          { id:"A", expr:"(a^2-b^2)(a^2+b^2)", justificacionCorta:"Diferencia de cuadrados con bases a² y b²", esValida:true, feedback:"Correcto. a⁴−b⁴=(a²)²−(b²)²=(a²−b²)(a²+b²)." },
          { id:"B", expr:"(a-b)^4", justificacionCorta:"Lo trato como una potencia cuarta de un binomio", esValida:false, feedback:"a⁴−b⁴ no es el desarrollo de (a−b)⁴, que tendría muchos más términos." }
        ]
      },
      { prompt: "Tenés $(a^2-b^2)(a^2+b^2)$. El primer factor todavía se puede factorizar más. ¿Cómo queda?", pideJustificacionLibre: false,
        opciones: [
          { id:"A", expr:"(a-b)(a+b)(a^2+b^2)", justificacionCorta:"a²-b² se factoriza otra vez como diferencia de cuadrados", esValida:true, feedback:"Correcto. a²−b²=(a−b)(a+b), y el factor (a²+b²) ya no se puede factorizar más con reales." },
          { id:"B", expr:"(a-b)(a+b)\\cdot 2", justificacionCorta:"Trato a²+b² como si fuera 2ab", esValida:false, feedback:"a²+b² no es lo mismo que 2ab (eso sería parte de un cuadrado de binomio); a²+b² no se simplifica más con números reales." }
        ]
      }
    ],
    formaCanonica: "(a-b)(a+b)(a^2+b^2)"
  },

  // D29: (a+b)⁴ ≡ a⁴+4a³b+6a²b²+4ab³+b⁴
  {
    id: "D29", nivel: 3, codigo: "D29",
    explicacion: {
      titulo: "Potencia cuarta de un binomio (binomio de Newton)",
      formulaGeneral: "(a+b)^4=a^4+4a^3b+6a^2b^2+4ab^3+b^4",
      texto: "Para potencias mayores a 2 o 3, conviene apoyarse en el cuadrado de un binomio ya conocido: (a+b)⁴=[(a+b)²]², y desarrollar ese cuadrado intermedio.",
      notaAplicacion: "$(a+b)^2=a^2+2ab+b^2$; elevar esto al cuadrado de nuevo da los cinco términos finales."
    },
    consigna: { textoConsigna: "Demostrá la identidad desarrollando el lado izquierdo.", expresionA: "(a+b)^4", expresionB: "a^4+4a^3b+6a^2b^2+4ab^3+b^4" },
    pasos: [
      { prompt: "¿Cómo conviene reescribir $(a+b)^4$ para desarrollarlo usando una identidad ya conocida?", pideJustificacionLibre: true,
        opciones: [
          { id:"A", expr:"[(a+b)^2]^2", justificacionCorta:"(a+b)⁴=[(a+b)²]², y (a+b)² ya es una identidad notable conocida", esValida:true, feedback:"Correcto. Elevar a la cuarta es elevar al cuadrado el resultado de elevar al cuadrado." },
          { id:"B", expr:"(a+b)^2+(a+b)^2", justificacionCorta:"Trato la potencia 4 como el doble de la potencia 2", esValida:false, feedback:"x⁴ no es 2·x², sino (x²)²: elevar a la cuarta es elevar al cuadrado dos veces, multiplicando exponentes, no sumándolos como si fuera el doble." }
        ]
      },
      { prompt: "Tenés $[(a+b)^2]^2=(a^2+2ab+b^2)^2$. Al elevar este trinomio al cuadrado, ¿qué término aparece con coeficiente 6?", pideJustificacionLibre: false,
        opciones: [
          { id:"A", expr:"6a^2b^2", justificacionCorta:"a²·b² aparece dos veces, más (2ab)² aparece una vez, sumando coeficiente 6", esValida:true, feedback:"Correcto: 2·(a²·b²)+ (2ab)² = 2a²b²+4a²b²=6a²b², junto con los términos a⁴, b⁴, y los cruzados 4a³b y 4ab³." },
          { id:"B", expr:"4a^2b^2", justificacionCorta:"Cuento solo el término (2ab)² una vez, sin sumar los productos cruzados a²·b²", esValida:false, feedback:"Falta sumar también los dos productos cruzados de a² con b² (que aparecen dos veces al elevar el trinomio al cuadrado), que aportan 2a²b² adicionales." }
        ]
      }
    ],
    formaCanonica: "a^4+4a^3b+6a^2b^2+4ab^3+b^4"
  },

  // D30: x⁶-1 ≡ (x-1)(x+1)(x²+x+1)(x²-x+1)
  {
    id: "D30", nivel: 3, codigo: "D30",
    explicacion: {
      titulo: "Diferencia de cuadrados y de cubos combinadas",
      formulaGeneral: "a^2-b^2=(a-b)(a+b) \\quad\\text{y}\\quad a^3\\pm b^3=(a\\pm b)(a^2\\mp ab+b^2)",
      texto: "Una potencia sexta menos 1 se puede ver como diferencia de cuadrados (de cubos) o como diferencia de cubos (de cuadrados). Conviene elegir el camino que permita factorizar más a fondo en pasos siguientes.",
      notaAplicacion: "$x^6-1=(x^3)^2-1^2$ es diferencia de cuadrados, pero también $x^6-1=(x^3-1)(x^3+1)$ es diferencia de cubos. El segundo camino permite seguir factorizando cada cubo."
    },
    consigna: { textoConsigna: "Demostrá la identidad factorizando completamente el lado izquierdo.", expresionA: "x^6-1", expresionB: "(x-1)(x+1)(x^2+x+1)(x^2-x+1)" },
    pasos: [
      { prompt: "¿Qué primera factorización conviene usar para $x^6-1$, pensando en seguir factorizando después?", pideJustificacionLibre: true,
        opciones: [
          { id:"A", expr:"(x^3-1)(x^3+1)", justificacionCorta:"Lo veo como diferencia de cubos: (x²)³-1³... en realidad x⁶=(x³)², así que diferencia de cuadrados con base x³", esValida:true, feedback:"Correcto. x⁶−1=(x³)²−1²=(x³−1)(x³+1), y cada factor es a su vez una diferencia/suma de cubos que se puede seguir factorizando." },
          { id:"B", expr:"(x^2-1)^3", justificacionCorta:"Trato x⁶-1 como el cubo de x²-1", esValida:false, feedback:"x⁶−1 no es el desarrollo de (x²−1)³, que tendría muchos más términos al expandirse." }
        ]
      },
      { prompt: "Tenés $(x^3-1)(x^3+1)$. Factorizá cada cubo. ¿Qué obtenés?", pideJustificacionLibre: true,
        opciones: [
          { id:"A", expr:"(x-1)(x^2+x+1)\\,(x+1)(x^2-x+1)", justificacionCorta:"x³-1=(x-1)(x²+x+1) y x³+1=(x+1)(x²-x+1)", esValida:true, feedback:"Correcto. Aplicás diferencia de cubos en (x³−1) y suma de cubos en (x³+1), y reordenando los cuatro factores llegás a la forma canónica." },
          { id:"B", expr:"(x-1)(x^2+x+1)\\,(x+1)(x^2+x+1)", justificacionCorta:"Uso el mismo trinomio x²+x+1 para ambos factores", esValida:false, feedback:"El trinomio de x³+1 (suma de cubos) lleva signo negativo en el término medio: x²−x+1, no x²+x+1. Cada cubo tiene su propio trinomio, no se repite el mismo." }
        ]
      }
    ],
    formaCanonica: "(x-1)(x+1)(x^2+x+1)(x^2-x+1)"
  },

// D31: x/(x+1) + 1/(x-1) [todo dividido por] x/(x²-1) ≡ (x³+x)/x²
  {
    id: "D31", nivel: 4, codigo: "D31",
    explicacion: {
      titulo: "Combinar fracciones y dividir por una fracción",
      formulaGeneral: "\\dfrac{a}{b}+\\dfrac{c}{d}=\\dfrac{ad+bc}{bd} \\quad\\text{y}\\quad \\dfrac{p}{\\,q/r\\,}=p\\cdot\\dfrac{r}{q}",
      texto: "Cuando A y B parecen no tener relación, conviene llevar cada lado por separado a una forma canónica simple y comparar. Acá el lado A es una suma de fracciones, dividida a su vez por otra fracción.",
      notaAplicacion: "Primero hay que sumar $\\frac{x}{x+1}+\\frac{1}{x-1}$, y después dividir ese resultado por $\\frac{x}{x^2-1}$."
    },
    consigna: { textoConsigna: "Demostrá que las siguientes expresiones son equivalentes para x≠0,±1.", expresionA: "\\dfrac{\\frac{x}{x+1}+\\frac{1}{x-1}}{\\frac{x}{x^2-1}}", expresionB: "\\dfrac{x^3+x}{x^2}" },
    pasos: [
      { prompt: "Primero sumá $\\dfrac{x}{x+1}+\\dfrac{1}{x-1}$ con común denominador. ¿Qué obtenés?", pideJustificacionLibre: true,
        opciones: [
          { id:"A", expr:"\\dfrac{x(x-1)+(x+1)}{x^2-1}", justificacionCorta:"Común denominador (x+1)(x-1)=x²-1; numeradores cruzados", esValida:true, feedback:"Correcto. El denominador común es (x+1)(x−1)=x²−1, y cada numerador se multiplica por lo que le falta." },
          { id:"B", expr:"\\dfrac{x+1}{x^2-1}", justificacionCorta:"Sumo los numeradores sin multiplicar cruzado", esValida:false, feedback:"No se pueden sumar los numeradores directamente sin antes igualar los denominadores multiplicando cruzado." }
        ]
      },
      { prompt: "Tenés $\\dfrac{x(x-1)+(x+1)}{x^2-1}=\\dfrac{x^2+1}{x^2-1}$. Ahora dividí esto por $\\dfrac{x}{x^2-1}$. ¿Cómo seguís?", pideJustificacionLibre: false,
        opciones: [
          { id:"A", expr:"\\dfrac{x^2+1}{x^2-1}\\cdot\\dfrac{x^2-1}{x}", justificacionCorta:"Divido fracciones multiplicando por el recíproco", esValida:true, feedback:"Correcto. Dividir por x/(x²−1) es multiplicar por su recíproco (x²−1)/x." },
          { id:"B", expr:"\\dfrac{x^2+1}{x^2-1}\\cdot\\dfrac{x}{x^2-1}", justificacionCorta:"Multiplico sin invertir la fracción del divisor", esValida:false, feedback:"Hay que invertir la fracción por la que se divide, no usarla tal cual." }
        ]
      },
      { prompt: "Tenés $\\dfrac{x^2+1}{x^2-1}\\cdot\\dfrac{x^2-1}{x}$. ¿Qué te queda al simplificar?", pideJustificacionLibre: false,
        opciones: [
          { id:"A", expr:"\\dfrac{x^2+1}{x}", justificacionCorta:"Cancelo el factor (x²-1) común", esValida:true, feedback:"Correcto. (x²−1) se cancela, quedando (x²+1)/x, que multiplicando arriba y abajo por x equivale a (x³+x)/x²." },
          { id:"B", expr:"x^2+1", justificacionCorta:"Cancelo también la x del denominador sin justificación", esValida:false, feedback:"Falta una x en el denominador: x²−1 se cancela, pero la x del denominador original queda." }
        ]
      }
    ],
    formaCanonica: "\\dfrac{x^2+1}{x}"
  },

  // D32: (x^(3/2)+x^(1/2))/√x ≡ (x²-1)/(x-1)
  {
    id: "D32", nivel: 4, codigo: "D32",
    explicacion: {
      titulo: "Factor común con exponentes fraccionarios y diferencia de cuadrados",
      formulaGeneral: "x^{m+k}=x^m\\cdot x^k \\quad\\text{y}\\quad a^2-b^2=(a-b)(a+b)",
      texto: "A y B usan herramientas distintas: A se simplifica sacando factor común con exponentes fraccionarios, y B se simplifica con diferencia de cuadrados. Ambos caminos deben llegar a la misma forma canónica.",
      notaAplicacion: "En A, $x^{3/2}=x^{1/2}\\cdot x$, así que $x^{1/2}$ es factor común. En B, $x^2-1=(x-1)(x+1)$."
    },
    consigna: { textoConsigna: "Demostrá que las siguientes expresiones son equivalentes para x>0, x≠1.", expresionA: "\\dfrac{x^{3/2}+x^{1/2}}{\\sqrt{x}}", expresionB: "\\dfrac{x^2-1}{x-1}" },
    pasos: [
      { prompt: "Simplificá el lado A: $\\dfrac{x^{3/2}+x^{1/2}}{\\sqrt{x}}$. ¿Cómo lo hacés?", pideJustificacionLibre: true,
        opciones: [
          { id:"A", expr:"\\dfrac{x^{1/2}(x+1)}{x^{1/2}}=x+1", justificacionCorta:"Saco x^{1/2} factor común y cancelo con el denominador", esValida:true, feedback:"Correcto. x^{3/2}=x^{1/2}·x, así que x^{1/2}(x+1) es el numerador factorizado, y se cancela con √x." },
          { id:"B", expr:"x^{3/2-1/2}+x^{1/2-1/2}=x+1", justificacionCorta:"Resto los exponentes término a término al dividir", esValida:true, feedback:"También es válido: dividir cada término del numerador por √x por separado, restando exponentes en cada uno, llega al mismo resultado x+1." }
        ]
      },
      { prompt: "Ahora simplificá el lado B: $\\dfrac{x^2-1}{x-1}$. ¿Qué te queda?", pideJustificacionLibre: false,
        opciones: [
          { id:"A", expr:"x+1", justificacionCorta:"x²-1=(x-1)(x+1); cancelo (x-1)", esValida:true, feedback:"Correcto. Factorizás x²−1 como diferencia de cuadrados y cancelás (x−1)." },
          { id:"B", expr:"x-1", justificacionCorta:"Cancelo mal y dejo el factor equivocado", esValida:false, feedback:"Al cancelar (x−1), lo que queda es el otro factor, (x+1), no (x−1) de nuevo." }
        ]
      }
    ],
    formaCanonica: "x+1"
  },

  // D33 (ya validado antes)
  {
    id: "D33", nivel: 4, codigo: "D33",
    explicacion: {
      titulo: "Racionalización con conjugados",
      formulaGeneral: "(\\sqrt{a}-\\sqrt{b})(\\sqrt{a}+\\sqrt{b})=a-b",
      texto: "Cuando hay raíces en un denominador, multiplicar por el conjugado elimina la raíz usando diferencia de cuadrados. Con dos fracciones de este tipo, conviene buscar directamente el común denominador, que ya es una diferencia de cuadrados.",
      notaAplicacion: "$(\\sqrt{x}-1)(\\sqrt{x}+1)=x-1$ es a la vez el común denominador y el resultado de racionalizar."
    },
    consigna: { textoConsigna: "Demostrá que las siguientes expresiones son equivalentes para x>0, x≠1.", expresionA: "\\dfrac{1}{\\sqrt{x}-1}-\\dfrac{1}{\\sqrt{x}+1}", expresionB: "\\dfrac{2}{x-1}" },
    pasos: [
      { prompt: "¿Cuál es la forma más directa de combinar ambas fracciones?", pideJustificacionLibre: false,
        opciones: [
          { id:"A", expr:"\\text{común denominador } (\\sqrt{x}-1)(\\sqrt{x}+1)", justificacionCorta:"El producto de ambos denominadores ya es una diferencia de cuadrados", esValida:true, feedback:"Correcto. (√x−1)(√x+1)=x−1, llegás directo a la forma canónica." },
          { id:"B", expr:"\\text{racionalizo cada fracción individualmente primero}", justificacionCorta:"Multiplico cada fracción por su propio conjugado antes de restar", esValida:true, feedback:"También es válido: racionalizando cada término por separado llegás igual a la forma canónica, con un camino más largo." },
          { id:"C", expr:"\\dfrac{1-1}{(\\sqrt{x}-1)-(\\sqrt{x}+1)}", justificacionCorta:"Resto numeradores y denominadores entre sí directamente", esValida:false, feedback:"Las fracciones no se restan restando numeradores y denominadores por separado." }
        ]
      },
      { prompt: "Usando común denominador $(\\sqrt{x}-1)(\\sqrt{x}+1)=x-1$, ¿qué te queda en el numerador?", pideJustificacionLibre: true,
        opciones: [
          { id:"A", expr:"(\\sqrt{x}+1)-(\\sqrt{x}-1)=2", justificacionCorta:"Resto los numeradores ya con el común denominador puesto", esValida:true, feedback:"Correcto. (√x+1)−(√x−1)=2, y con denominador x−1 llegás a 2/(x−1)." },
          { id:"B", expr:"(\\sqrt{x}-1)-(\\sqrt{x}+1)=-2", justificacionCorta:"Invierto el orden de la resta", esValida:false, feedback:"El primer numerador corresponde al segundo denominador de la consigna original, no al revés." }
        ]
      }
    ],
    formaCanonica: "\\dfrac{2}{x-1}"
  },

  // D34: ((a²b⁻¹)³(a⁻¹b²)²)/(a⁴b⁻¹) ≡ ⁴√b  [reconstruido fiel a la solución del PDF]
  {
    id: "D34", nivel: 4, codigo: "D34",
    explicacion: {
      titulo: "Propiedades combinadas de potencias",
      formulaGeneral: "(x^m)^n=x^{mn} \\quad\\text{y}\\quad x^m\\cdot x^n=x^{m+n} \\quad\\text{y}\\quad \\dfrac{x^m}{x^n}=x^{m-n}",
      texto: "Cuando se combinan varias potencias con exponentes negativos, conviene resolver cada potencia de potencia primero, después sumar exponentes de la misma base al multiplicar, y al final restar exponentes al dividir.",
      notaAplicacion: "Primero hay que resolver $(a^2b^{-1})^3$ y $(a^{-1}b^2)^2$ por separado, multiplicarlos entre sí, y después dividir todo por $a^4b^{-1}$."
    },
    consigna: { textoConsigna: "Demostrá que las siguientes expresiones son equivalentes para a,b>0.", expresionA: "\\dfrac{(a^2b^{-1})^3(a^{-1}b^2)^2}{a^4b^{-1}}", expresionB: "(\\sqrt{b})^4" },
    pasos: [
      { prompt: "Resolvé $(a^2b^{-1})^3$ y $(a^{-1}b^2)^2$ por separado, y multiplicalos. ¿Qué obtenés?", pideJustificacionLibre: true,
        opciones: [
          { id:"A", expr:"a^4 b", justificacionCorta:"a⁶b⁻³ · a⁻²b⁴, sumando exponentes de igual base: a^{6-2}b^{-3+4}", esValida:true, feedback:"Correcto. (a²b⁻¹)³=a⁶b⁻³, (a⁻¹b²)²=a⁻²b⁴. Multiplicando: a^{6-2}b^{-3+4}=a⁴b." },
          { id:"B", expr:"a^{10}b^{-6}", justificacionCorta:"Sumo los exponentes 6+2 y -3+(-4) en vez de combinar correctamente cada potencia", esValida:false, feedback:"Revisá el desarrollo de cada potencia por separado: (a⁻¹b²)² da a⁻²b⁴ (exponentes ×2), no a⁻²b⁻⁴." }
        ]
      },
      { prompt: "Tenés $\\dfrac{a^4b}{a^4b^{-1}}$. ¿Cómo seguís?", pideJustificacionLibre: false,
        opciones: [
          { id:"A", expr:"b^2", justificacionCorta:"Cancelo a⁴ y resto exponentes de b: b^{1-(-1)}=b²", esValida:true, feedback:"Correcto. a⁴/a⁴=1, y b/b⁻¹=b^{1-(-1)}=b²." },
          { id:"B", expr:"b^0=1", justificacionCorta:"Resto los exponentes de b como si fueran iguales: 1-1", esValida:false, feedback:"El denominador tiene exponente −1, no 1: b^{1-(-1)}=b², no b^{1-1}." }
        ]
      },
      { prompt: "Ya viste que el lado A se simplifica a $b^2$. Ahora desarrollá el lado B, $(\\sqrt{b})^4$, para confirmar que coincide. ¿Qué obtenés?", pideJustificacionLibre: true,
        opciones: [
          { id:"A", expr:"(b^{1/2})^4=b^{4/2}=b^2", justificacionCorta:"√b=b^{1/2}; al elevar a la cuarta, multiplico los exponentes", esValida:true, feedback:"Correcto. (b^{1/2})^4=b^{(1/2)\\cdot 4}=b^2, coincidiendo con el resultado del lado A." },
          { id:"B", expr:"(b^{1/2})^4=b^{1/8}", justificacionCorta:"Divido los exponentes en vez de multiplicarlos", esValida:false, feedback:"Al elevar una potencia a otra potencia, los exponentes se multiplican, no se dividen: (1/2)·4=2, no 1/8." }
        ]
      }
    ],
    formaCanonica: "b^2"
  },

  // D35
  {
    id: "D35", nivel: 4, codigo: "D35",
    explicacion: {
      titulo: "Diferencia de cubos y factor común combinados",
      formulaGeneral: "a^3-b^3=(a-b)(a^2+ab+b^2) \\quad\\text{y}\\quad a^2-b^2=(a-b)(a+b)",
      texto: "A y B usan factorizaciones distintas: A combina diferencia de cubos con diferencia de cuadrados y cancela factores comunes; B solo necesita sacar factor común.",
      notaAplicacion: "En A, $x^3-1$ es diferencia de cubos y $x^2-1$ es diferencia de cuadrados; ambos comparten el factor $(x-1)$."
    },
    consigna: { textoConsigna: "Demostrá que las siguientes expresiones son equivalentes para x≠0,±1.", expresionA: "\\dfrac{x^3-1}{x^2-1}\\cdot\\dfrac{x+1}{x}", expresionB: "\\dfrac{x^3+x^2+x}{x^2}" },
    pasos: [
      { prompt: "Factorizá $x^3-1$ y $x^2-1$ en el lado A. ¿Qué obtenés?", pideJustificacionLibre: true,
        opciones: [
          { id:"A", expr:"\\dfrac{(x-1)(x^2+x+1)}{(x-1)(x+1)}\\cdot\\dfrac{x+1}{x}", justificacionCorta:"Diferencia de cubos arriba, diferencia de cuadrados abajo", esValida:true, feedback:"Correcto. x³−1=(x−1)(x²+x+1), y x²−1=(x−1)(x+1)." },
          { id:"B", expr:"\\dfrac{(x-1)^3}{(x-1)^2}\\cdot\\dfrac{x+1}{x}", justificacionCorta:"Trato x³-1 y x²-1 como potencias de (x-1)", esValida:false, feedback:"x³−1 no es (x−1)³ ni x²−1 es (x−1)²: son diferencias de cubos y de cuadrados, no potencias de un mismo binomio." }
        ]
      },
      { prompt: "Tenés $\\dfrac{(x-1)(x^2+x+1)}{(x-1)(x+1)}\\cdot\\dfrac{x+1}{x}$. ¿Cómo seguís?", pideJustificacionLibre: false,
        opciones: [
          { id:"A", expr:"\\dfrac{x^2+x+1}{x}", justificacionCorta:"Cancelo (x-1) y (x+1) en sus respectivos lugares", esValida:true, feedback:"Correcto. (x−1) se cancela arriba y abajo, y (x+1) también se cancela con el (x+1) del segundo factor." },
          { id:"B", expr:"\\dfrac{x^2+x+1}{x+1}", justificacionCorta:"Cancelo (x-1) pero olvido cancelar (x+1)", esValida:false, feedback:"El factor (x+1) del denominador se cancela con el (x+1) que multiplica en el segundo término; falta hacer esa cancelación." }
        ]
      },
      { prompt: "Tenés $\\dfrac{x^2+x+1}{x}$. ¿Cómo se relaciona con el lado B, $\\dfrac{x^3+x^2+x}{x^2}$?", pideJustificacionLibre: false,
        opciones: [
          { id:"A", expr:"\\dfrac{x(x^2+x+1)}{x\\cdot x}=\\dfrac{x^2+x+1}{x}", justificacionCorta:"En B, saco x factor común en el numerador y simplifico con x²", esValida:true, feedback:"Correcto. x³+x²+x=x(x²+x+1), y dividiendo por x² (que es x·x), una x se cancela, quedando lo mismo que el lado A." },
          { id:"B", expr:"\\dfrac{x^3+x^2+x}{x^2}=x+1+\\dfrac{1}{x}", justificacionCorta:"Divido cada término del numerador de B por x² por separado sin factorizar", esValida:false, feedback:"Esa división término a término da x+1+1/x, que no coincide con x²+x+1 sobre x; conviene factorizar x del numerador primero." }
        ]
      }
    ],
    formaCanonica: "\\dfrac{x^2+x+1}{x}"
  },

  // D36
  {
    id: "D36", nivel: 4, codigo: "D36",
    explicacion: {
      titulo: "Factorización combinada con división de fracciones",
      formulaGeneral: "a^2-b^2=(a-b)(a+b) \\quad\\text{y}\\quad \\dfrac{p}{\\,q/r\\,}=p\\cdot\\dfrac{r}{q}",
      texto: "Cuando el lado A combina multiplicación y división de varias fracciones algebraicas, conviene factorizar todo primero y simplificar paso a paso, recordando que dividir por una fracción es multiplicar por su recíproco.",
      notaAplicacion: "Hay tres factorizaciones distintas en juego: $x^2-9$, $x^2+6x+9$ (cuadrado de binomio) y los factores comunes $x^2+3x$, $x^2-3x$."
    },
    consigna: { textoConsigna: "Demostrá que las siguientes expresiones son equivalentes para x≠0,±3.", expresionA: "\\left(\\dfrac{x^2-9}{x^2+6x+9}\\cdot\\dfrac{x^2+3x}{x^2-3x}\\right)\\div\\dfrac{x}{x+3}", expresionB: "\\dfrac{x^2+3x}{x^2}" },
    pasos: [
      { prompt: "Factorizá $x^2-9$ y $x^2+6x+9$. ¿Qué obtenés?", pideJustificacionLibre: true,
        opciones: [
          { id:"A", expr:"(x-3)(x+3) \\text{ y } (x+3)^2", justificacionCorta:"Diferencia de cuadrados arriba, cuadrado de binomio abajo", esValida:true, feedback:"Correcto. x²−9=(x−3)(x+3), y x²+6x+9=(x+3)² porque 6=2·3." },
          { id:"B", expr:"(x-3)(x+3) \\text{ y } (x+3)(x-3)", justificacionCorta:"Trato x²+6x+9 como otra diferencia de cuadrados", esValida:false, feedback:"x²+6x+9 tiene un término lineal (+6x), así que no es una diferencia de cuadrados: es un cuadrado de binomio, (x+3)²." }
        ]
      },
      { prompt: "Con esas factorizaciones, el primer factor $\\dfrac{x^2-9}{x^2+6x+9}=\\dfrac{(x-3)(x+3)}{(x+3)^2}$ se simplifica a $\\dfrac{x-3}{x+3}$. Ahora factorizá $\\dfrac{x^2+3x}{x^2-3x}$. ¿Qué obtenés?", pideJustificacionLibre: false,
        opciones: [
          { id:"A", expr:"\\dfrac{x(x+3)}{x(x-3)}=\\dfrac{x+3}{x-3}", justificacionCorta:"Saco x factor común arriba y abajo, y cancelo", esValida:true, feedback:"Correcto. x²+3x=x(x+3) y x²−3x=x(x−3); cancelando la x, queda (x+3)/(x−3)." },
          { id:"B", expr:"\\dfrac{3x}{-3x}=-1", justificacionCorta:"Cancelo x² arriba y abajo dejando solo los términos lineales", esValida:false, feedback:"No se puede cancelar x² de cada término por separado sin antes factorizar la expresión completa." }
        ]
      },
      { prompt: "Multiplicando los dos factores simplificados, $\\dfrac{x-3}{x+3}\\cdot\\dfrac{x+3}{x-3}=1$. Ahora dividí ese resultado por $\\dfrac{x}{x+3}$. ¿Qué obtenés?", pideJustificacionLibre: true,
        opciones: [
          { id:"A", expr:"1\\div\\dfrac{x}{x+3}=\\dfrac{x+3}{x}", justificacionCorta:"Dividir por una fracción es multiplicar por su recíproco", esValida:true, feedback:"Correcto. 1 dividido por x/(x+3) es 1 multiplicado por (x+3)/x, que da (x+3)/x. Multiplicando arriba y abajo por x, equivale a (x²+3x)/x²." },
          { id:"B", expr:"1\\div\\dfrac{x}{x+3}=\\dfrac{x}{x+3}", justificacionCorta:"Divido sin invertir la fracción del divisor", esValida:false, feedback:"Al dividir por una fracción hay que invertirla y multiplicar, no dejarla igual." }
        ]
      }
    ],
    formaCanonica: "\\dfrac{x+3}{x}"
  },

  // D37
  {
    id: "D37", nivel: 4, codigo: "D37",
    explicacion: {
      titulo: "Exponentes fraccionarios combinados",
      formulaGeneral: "\\sqrt[n]{x^m}=x^{m/n} \\quad\\text{y}\\quad x^m\\cdot x^n=x^{m+n} \\quad\\text{y}\\quad \\dfrac{x^m}{x^n}=x^{m-n}",
      texto: "Para combinar raíces de distinto índice con divisiones, conviene convertir todo a exponente fraccionario y operar con un común denominador entre los exponentes.",
      notaAplicacion: "$\\sqrt[3]{x^4}=x^{4/3}$ y $\\sqrt{x}=x^{1/2}$; el común denominador entre 3 y 2 es 6."
    },
    consigna: { textoConsigna: "Demostrá que las siguientes expresiones son equivalentes para x>0.", expresionA: "\\sqrt[3]{x^4}\\cdot\\dfrac{\\sqrt{x}}{x^{2/3}}", expresionB: "\\sqrt[6]{x^7}" },
    pasos: [
      { prompt: "Convertí todo a exponente fraccionario. ¿Qué expresión obtenés?", pideJustificacionLibre: true,
        opciones: [
          { id:"A", expr:"x^{4/3}\\cdot\\dfrac{x^{1/2}}{x^{2/3}}", justificacionCorta:"∛(x⁴)=x^{4/3} y √x=x^{1/2}", esValida:true, feedback:"Correcto. Toda raíz se puede escribir como exponente fraccionario: índice en el denominador." },
          { id:"B", expr:"x^4\\cdot\\dfrac{x^2}{x^{2/3}}", justificacionCorta:"Convierto la raíz cúbica dejando el exponente entero 4", esValida:false, feedback:"∛(x⁴) es x^{4/3}, no x⁴: el índice de la raíz va en el denominador del exponente." }
        ]
      },
      { prompt: "Tenés $x^{4/3}\\cdot\\dfrac{x^{1/2}}{x^{2/3}}$. Sumando y restando los exponentes con común denominador 6, ¿qué exponente final obtenés?", pideJustificacionLibre: false,
        opciones: [
          { id:"A", expr:"x^{7/6}", justificacionCorta:"4/3+1/2-2/3 = 8/6+3/6-4/6 = 7/6", esValida:true, feedback:"Correcto. Pasando todo a sextos: 4/3=8/6, 1/2=3/6, 2/3=4/6; entonces 8/6+3/6−4/6=7/6." },
          { id:"B", expr:"x^{1}", justificacionCorta:"Sumo los numeradores y denominadores de las fracciones por separado", esValida:false, feedback:"Las fracciones de los exponentes no se suman sumando numeradores y denominadores por separado; hay que llevarlas a común denominador primero." }
        ]
      }
    ],
    formaCanonica: "x^{7/6}"
  },

  // D38
  {
    id: "D38", nivel: 4, codigo: "D38",
    explicacion: {
      titulo: "Factorización combinada de trinomios cuadráticos",
      formulaGeneral: "x^2-9=(x-3)(x+3) \\quad\\text{y}\\quad x^2+bx+c=(x-r_1)(x-r_2)",
      texto: "Cuando hay varios trinomios cuadráticos multiplicándose y dividiéndose, conviene factorizar cada uno por separado (algunos son diferencia de cuadrados, otros se factorizan buscando dos números que sumen y multipliquen según los coeficientes).",
      notaAplicacion: "$x^2-x-6$ se factoriza buscando dos números que multiplicados den −6 y sumados den −1: esos son −3 y 2."
    },
    consigna: { textoConsigna: "Demostrá que las siguientes expresiones son equivalentes para x≠0,2,3,−2.", expresionA: "\\dfrac{x^2-4}{x^2-x-6}\\cdot\\dfrac{x^2-9}{x^2-4x+4}", expresionB: "\\dfrac{x^2+3x}{x^2-2x}" },
    pasos: [
      { prompt: "Factorizá los cuatro trinomios/binomios involucrados. ¿Qué obtenés?", pideJustificacionLibre: true,
        opciones: [
          { id:"A", expr:"\\dfrac{(x-2)(x+2)}{(x-3)(x+2)}\\cdot\\dfrac{(x-3)(x+3)}{(x-2)^2}", justificacionCorta:"x²-4 diferencia de cuadrados, x²-x-6=(x-3)(x+2), x²-9 diferencia de cuadrados, x²-4x+4=(x-2)²", esValida:true, feedback:"Correcto: x²−4=(x−2)(x+2); x²−x−6=(x−3)(x+2) porque −3·2=−6 y −3+2=−1; x²−9=(x−3)(x+3); x²−4x+4=(x−2)²." },
          { id:"B", expr:"\\dfrac{(x-2)(x+2)}{(x+3)(x-2)}\\cdot\\dfrac{(x-3)(x+3)}{(x-2)^2}", justificacionCorta:"Factorizo x²-x-6 como (x+3)(x-2)", esValida:false, feedback:"(x+3)(x−2)=x²+x−6, no x²−x−6: el signo del término lineal no coincide. Los factores correctos son (x−3)(x+2)." }
        ]
      },
      { prompt: "Tenés $\\dfrac{(x-2)(x+2)}{(x-3)(x+2)}\\cdot\\dfrac{(x-3)(x+3)}{(x-2)^2}$. ¿Qué se cancela?", pideJustificacionLibre: false,
        opciones: [
          { id:"A", expr:"\\dfrac{x+3}{x-2}", justificacionCorta:"Cancelo (x+2), (x-3) y una (x-2)", esValida:true, feedback:"Correcto. (x+2) se cancela entre el primer numerador y denominador, (x−3) entre el segundo numerador y el primer denominador, y queda una (x−2) cancelada del denominador (x−2)²." },
          { id:"B", expr:"\\dfrac{x+3}{x+2}", justificacionCorta:"Cancelo mal y dejo (x+2) en el denominador en vez de (x-2)", esValida:false, feedback:"El factor que sobrevive en el denominador es (x−2) (de los dos que tenía (x−2)²), no (x+2), que ya se canceló por completo." }
        ]
      },
      { prompt: "Tenés $\\dfrac{x+3}{x-2}$. ¿Cómo se relaciona con el lado B, $\\dfrac{x^2+3x}{x^2-2x}$?", pideJustificacionLibre: false,
        opciones: [
          { id:"A", expr:"\\dfrac{x(x+3)}{x(x-2)}=\\dfrac{x+3}{x-2}", justificacionCorta:"Saco x factor común en numerador y denominador de B", esValida:true, feedback:"Correcto. x²+3x=x(x+3) y x²−2x=x(x−2); cancelando la x, coincide con el lado A." },
          { id:"B", expr:"\\dfrac{x+3}{x-2}\\cdot x", justificacionCorta:"Multiplico por x en vez de cancelarlo de ambos términos", esValida:false, feedback:"Al factorizar x del numerador y del denominador de B, la x se cancela directamente; no queda multiplicando afuera." }
        ]
      }
    ],
    formaCanonica: "\\dfrac{x+3}{x-2}"
  },

  // D39
  {
    id: "D39", nivel: 4, codigo: "D39",
    explicacion: {
      titulo: "Exponentes fraccionarios y negativos",
      formulaGeneral: "x^m\\cdot x^n=x^{m+n} \\quad\\text{y}\\quad \\dfrac{x^m}{x^n}=x^{m-n} \\quad\\text{y}\\quad x^{-n}=\\dfrac{1}{x^n}",
      texto: "Dividir por una potencia con exponente negativo equivale a restar un número negativo, lo cual suma el exponente positivo correspondiente. Conviene operar con cuidado en ambos lados por separado.",
      notaAplicacion: "En A, dividir por $x^{-1/2}$ equivale a restar $-1/2$ del exponente acumulado, es decir, sumar $1/2$."
    },
    consigna: { textoConsigna: "Demostrá que las siguientes expresiones son equivalentes para x>0.", expresionA: "\\dfrac{x^{1/3}\\cdot x^{1/6}}{x^{-1/2}}", expresionB: "\\dfrac{x^{5/2}}{x^{3/2}}" },
    pasos: [
      { prompt: "Simplificá el lado A. ¿Qué exponente final obtenés?", pideJustificacionLibre: true,
        opciones: [
          { id:"A", expr:"x^{1/3+1/6+1/2}=x^1=x", justificacionCorta:"Sumo los exponentes del numerador, y restar un exponente negativo equivale a sumar su valor absoluto", esValida:true, feedback:"Correcto. 1/3+1/6=1/2 (común denominador 6: 2/6+1/6=3/6=1/2), y dividir por x^{-1/2} suma otro 1/2, dando 1/2+1/2=1." },
          { id:"B", expr:"x^{1/3+1/6-1/2}=x^0=1", justificacionCorta:"Resto el exponente -1/2 como si fuera positivo", esValida:false, feedback:"Dividir por x^{-1/2} es restar el exponente −1/2, lo cual equivale a SUMAR 1/2, no a restar 1/2 de nuevo." }
        ]
      },
      { prompt: "Simplificá el lado B: $\\dfrac{x^{5/2}}{x^{3/2}}$. ¿Qué obtenés?", pideJustificacionLibre: false,
        opciones: [
          { id:"A", expr:"x^{5/2-3/2}=x^1=x", justificacionCorta:"Resto los exponentes al dividir potencias de igual base", esValida:true, feedback:"Correcto. 5/2−3/2=2/2=1." },
          { id:"B", expr:"x^{5/2+3/2}=x^4", justificacionCorta:"Sumo los exponentes en vez de restarlos", esValida:false, feedback:"Al dividir potencias de igual base se restan los exponentes, no se suman." }
        ]
      }
    ],
    formaCanonica: "x"
  },

  // D40
  {
    id: "D40", nivel: 4, codigo: "D40",
    explicacion: {
      titulo: "Suma de cubos y cancelación total",
      formulaGeneral: "a^3+b^3=(a+b)(a^2-ab+b^2) \\quad\\text{y}\\quad a^2-b^2=(a-b)(a+b)",
      texto: "Cuando todos los factores se cancelan entre sí, el resultado final puede ser simplemente 1. Conviene factorizar todo a fondo antes de multiplicar, para detectar qué se cancela.",
      notaAplicacion: "$x^3+8$ es suma de cubos, $x^2-4$ es diferencia de cuadrados, y el segundo factor $\\frac{x-2}{x^2-2x+4}$ comparte partes con el primero."
    },
    consigna: { textoConsigna: "Demostrá que las siguientes expresiones son equivalentes para x≠0,±2.", expresionA: "\\dfrac{x^3+8}{x^2-4}\\cdot\\dfrac{x-2}{x^2-2x+4}", expresionB: "1" },
    pasos: [
      { prompt: "Factorizá $x^3+8$ y $x^2-4$. ¿Qué obtenés?", pideJustificacionLibre: true,
        opciones: [
          { id:"A", expr:"(x+2)(x^2-2x+4) \\text{ y } (x-2)(x+2)", justificacionCorta:"Suma de cubos arriba, diferencia de cuadrados abajo", esValida:true, feedback:"Correcto. x³+8=x³+2³=(x+2)(x²−2x+4), y x²−4=(x−2)(x+2)." },
          { id:"B", expr:"(x+2)^3 \\text{ y } (x-2)^2", justificacionCorta:"Trato ambos como potencias de un binomio", esValida:false, feedback:"x³+8 no es (x+2)³ (que tendría más términos), ni x²−4 es (x−2)² (que tendría término lineal −4x)." }
        ]
      },
      { prompt: "Tenés $\\dfrac{(x+2)(x^2-2x+4)}{(x-2)(x+2)}\\cdot\\dfrac{x-2}{x^2-2x+4}$. ¿Qué pasa al multiplicar y simplificar todo?", pideJustificacionLibre: true,
        opciones: [
          { id:"A", expr:"\\text{todos los factores se cancelan, queda } 1", justificacionCorta:"(x+2), (x²-2x+4) y (x-2) aparecen tanto arriba como abajo", esValida:true, feedback:"Correcto. (x+2) se cancela, (x²−2x+4) se cancela, y (x−2) se cancela: no queda nada más que 1." },
          { id:"B", expr:"x^2-2x+4", justificacionCorta:"Cancelo solo (x+2) y (x-2), dejando el trinomio sin cancelar", esValida:false, feedback:"El trinomio (x²−2x+4) también aparece tanto en el numerador del primer factor como en el denominador del segundo, así que también se cancela." }
        ]
      }
    ],
    formaCanonica: "1"
  },

  // D41
  {
    id: "D41", nivel: 4, codigo: "D41",
    explicacion: {
      titulo: "Racionalización con conjugados (suma)",
      formulaGeneral: "(\\sqrt{a}-\\sqrt{b})(\\sqrt{a}+\\sqrt{b})=a-b",
      texto: "Similar a D33, pero ahora las dos fracciones se suman en vez de restarse. El común denominador sigue siendo el producto de ambos denominadores, que es una diferencia de cuadrados.",
      notaAplicacion: "El común denominador $(\\sqrt{x}-1)(\\sqrt{x}+1)=x-1$ es el mismo que en D33, pero el numerador resultante va a ser distinto porque ahora se suman las fracciones."
    },
    consigna: { textoConsigna: "Demostrá que las siguientes expresiones son equivalentes para x>0, x≠1.", expresionA: "\\dfrac{1}{\\sqrt{x}-1}+\\dfrac{1}{\\sqrt{x}+1}", expresionB: "\\dfrac{2\\sqrt{x}}{x-1}" },
    pasos: [
      { prompt: "Usando común denominador $(\\sqrt{x}-1)(\\sqrt{x}+1)=x-1$, ¿qué te queda en el numerador?", pideJustificacionLibre: true,
        opciones: [
          { id:"A", expr:"(\\sqrt{x}+1)+(\\sqrt{x}-1)=2\\sqrt{x}", justificacionCorta:"Sumo los numeradores ya con el común denominador puesto", esValida:true, feedback:"Correcto. (√x+1)+(√x−1)=2√x, ya que los +1 y −1 se cancelan entre sí." },
          { id:"B", expr:"(\\sqrt{x}+1)+(\\sqrt{x}-1)=2\\sqrt{x}+2", justificacionCorta:"Sumo los términos sin cancelar el +1 y el -1", esValida:false, feedback:"+1 y −1 son términos opuestos que se cancelan al sumarse, no se pueden sumar como si tuvieran el mismo signo." }
        ]
      }
    ],
    formaCanonica: "\\dfrac{2\\sqrt{x}}{x-1}"
  },

  // D42 (reconstruido fiel a la solución del PDF)
  {
    id: "D42", nivel: 4, codigo: "D42",
    explicacion: {
      titulo: "Propiedades combinadas de potencias",
      formulaGeneral: "(x^m)^n=x^{mn} \\quad\\text{y}\\quad x^m\\cdot x^n=x^{m+n} \\quad\\text{y}\\quad \\dfrac{x^m}{x^n}=x^{m-n}",
      texto: "Como en D34, conviene resolver primero las potencias de potencias, después combinar multiplicando bases iguales, y al final dividir restando exponentes.",
      notaAplicacion: "Primero resolvé $(a^3b^{-2})^2$, multiplicalo por $(a^{-1}b^3)$, y después dividí todo por $a^4b^{-1}$."
    },
    consigna: { textoConsigna: "Demostrá que las siguientes expresiones son equivalentes para a,b>0.", expresionA: "\\dfrac{(a^3b^{-2})^2(a^{-1}b^3)}{a^4b^{-1}}", expresionB: "\\dfrac{a^{3/2}}{\\sqrt{a}}" },
    pasos: [
      { prompt: "Resolvé $(a^3b^{-2})^2$ y multiplicalo por $(a^{-1}b^3)$. ¿Qué obtenés?", pideJustificacionLibre: true,
        opciones: [
          { id:"A", expr:"a^5 b^{-1}", justificacionCorta:"a⁶b⁻⁴ · a⁻¹b³, sumando exponentes de igual base: a^{6-1}b^{-4+3}", esValida:true, feedback:"Correcto. (a³b⁻²)²=a⁶b⁻⁴. Multiplicando por a⁻¹b³: a^{6-1}b^{-4+3}=a⁵b⁻¹." },
          { id:"B", expr:"a^7 b^{-5}", justificacionCorta:"Sumo los exponentes sin elevar correctamente al cuadrado primero", esValida:false, feedback:"Revisá (a³b⁻²)²: el exponente exterior 2 multiplica a cada exponente interno, dando a⁶b⁻⁴, no a³b⁻²." }
        ]
      },
      { prompt: "Tenés $\\dfrac{a^5b^{-1}}{a^4b^{-1}}$. ¿Cómo seguís?", pideJustificacionLibre: false,
        opciones: [
          { id:"A", expr:"a", justificacionCorta:"Cancelo b⁻¹ y resto exponentes de a: a^{5-4}", esValida:true, feedback:"Correcto. b⁻¹/b⁻¹=1, y a⁵/a⁴=a^{5-4}=a." },
          { id:"B", expr:"a\\cdot b^{-2}", justificacionCorta:"Resto los exponentes de b en vez de cancelarlos", esValida:false, feedback:"b⁻¹ está tanto en el numerador como en el denominador con el mismo exponente, así que se cancela completamente (da b⁰=1), no queda ningún resto." }
        ]
      },
      { prompt: "Tenés $a$. ¿Cómo coincide con el lado B, $\\dfrac{a^{3/2}}{\\sqrt{a}}$?", pideJustificacionLibre: false,
        opciones: [
          { id:"A", expr:"\\dfrac{a^{3/2}}{a^{1/2}}=a^{3/2-1/2}=a", justificacionCorta:"√a=a^{1/2}; resto exponentes al dividir", esValida:true, feedback:"Correcto. a^{3/2}/a^{1/2}=a^{3/2-1/2}=a^1=a, igual que el lado A." },
          { id:"B", expr:"\\dfrac{a^{3/2}}{a^{1/2}}=a^{3/2+1/2}=a^2", justificacionCorta:"Sumo los exponentes en vez de restarlos", esValida:false, feedback:"Al dividir potencias de igual base se restan los exponentes, no se suman." }
        ]
      }
    ],
    formaCanonica: "a"
  },

  // D43
  {
    id: "D43", nivel: 4, codigo: "D43",
    explicacion: {
      titulo: "Común denominador con tres fracciones",
      formulaGeneral: "a^2-b^2=(a-b)(a+b)",
      texto: "Cuando hay tres fracciones combinadas (dos sumas y una resta), conviene identificar el común denominador más simple, que suele ser una diferencia de cuadrados ya factorizada.",
      notaAplicacion: "$x^2-1=(x-1)(x+1)$ ya es el común denominador entre las tres fracciones del lado A."
    },
    consigna: { textoConsigna: "Demostrá que las siguientes expresiones son equivalentes para x≠0,±1.", expresionA: "\\dfrac{1}{x-1}+\\dfrac{1}{x+1}-\\dfrac{2}{x^2-1}", expresionB: "\\dfrac{2x}{x^2+x}" },
    pasos: [
      { prompt: "Usando común denominador $x^2-1=(x-1)(x+1)$, ¿qué te queda en el numerador?", pideJustificacionLibre: true,
        opciones: [
          { id:"A", expr:"(x+1)+(x-1)-2=2x-2", justificacionCorta:"Sumo los numeradores cruzados de las dos primeras fracciones, y resto 2 (que ya tiene el denominador correcto)", esValida:true, feedback:"Correcto. (x+1)+(x-1)-2=2x-2, ya que +1-1-2=-2." },
          { id:"B", expr:"(x+1)+(x-1)+2=2x+2", justificacionCorta:"Sumo el 2 en vez de restarlo", esValida:false, feedback:"La consigna tiene un signo menos antes de 2/(x²−1): ese término se resta, no se suma." }
        ]
      },
      { prompt: "Tenés $\\dfrac{2x-2}{x^2-1}$. ¿Cómo seguís para llegar a la forma más simple?", pideJustificacionLibre: false,
        opciones: [
          { id:"A", expr:"\\dfrac{2(x-1)}{(x-1)(x+1)}=\\dfrac{2}{x+1}", justificacionCorta:"Saco 2 factor común arriba, factorizo el denominador y cancelo (x-1)", esValida:true, feedback:"Correcto. 2x−2=2(x−1), y cancelando (x−1) con el denominador factorizado, queda 2/(x+1)." },
          { id:"B", expr:"\\dfrac{2x-2}{x^2-1}=2x-2-x^2+1", justificacionCorta:"Resto el denominador del numerador en vez de simplificar la fracción", esValida:false, feedback:"Estás en una división, no en una resta: hay que factorizar y cancelar, no restar denominador menos numerador." }
        ]
      },
      { prompt: "Tenés $\\dfrac{2}{x+1}$. ¿Cómo se relaciona con el lado B, $\\dfrac{2x}{x^2+x}$?", pideJustificacionLibre: false,
        opciones: [
          { id:"A", expr:"\\dfrac{2x}{x(x+1)}=\\dfrac{2}{x+1}", justificacionCorta:"Saco x factor común en numerador y denominador de B", esValida:true, feedback:"Correcto. x²+x=x(x+1); cancelando x, 2x/(x(x+1))=2/(x+1), igual al lado A." },
          { id:"B", expr:"\\dfrac{2x}{x^2+x}=\\dfrac{2}{x}+1", justificacionCorta:"Divido cada término del numerador y denominador por separado", esValida:false, feedback:"No se puede separar la fracción dividiendo numerador y denominador por partes distintas; hay que factorizar x del denominador completo." }
        ]
      }
    ],
    formaCanonica: "\\dfrac{2}{x+1}"
  }
];
