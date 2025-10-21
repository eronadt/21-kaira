import React, { useEffect, useMemo, useState } from "react";

/** Formata número com 2 dígitos (ex.: 7 -> "07") */
function two(n: number) {
  return n.toString().padStart(2, "0");
}

/** Retorna 23:59:59.999 do dia corrente */
function endOfDayFor(date: Date): Date {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate(), 23, 59, 59, 999);
}

export default function CTA() {
  // ----- lógica do contador -----
  const [now, setNow] = useState<Date>(new Date());
  // Recalcula o fim do dia quando a data muda (vira 00:00)
  const endOfToday = useMemo(() => endOfDayFor(now), [now.toDateString()]);

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const msLeft = Math.max(0, endOfToday.getTime() - now.getTime());
  const totalSeconds = Math.floor(msLeft / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  const hojeFormatado = now.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  // ----- UI -----
  return (
    <section className="bg-gradient-to-r from-pink-500 to-red-500 py-16">
      <div className="container mx-auto px-4 text-center">
        {/* CTA Image */}
        <div className="mb-8">
          <img
            src="https://i.imgur.com/5H6yvst.png"
            alt="Mãe feliz com celular recebendo conteúdo digital"
            className="w-30 h-30 mx-auto rounded-full object-cover"
          />
        </div>

        <div className="max-w-4xl mx-auto">
          <p className="text-white text-lg mb-8 opacity-90">
            (Entrega imediata por e-mail)
          </p>

          {/* Guarantees */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/10 p-6 rounded-xl">
              <img
                src="https://i.imgur.com/fsySJjQ.png"
                alt="Selo de garantia e proteção"
                className="w-30 h-30 mx-auto mb-3 rounded-full object-cover"
              />
              <h3 className="text-white font-bold text-lg mb-2">Garantia Incondicional</h3>
              <p className="text-white/90">30 dias para testar. Não gostou? Devolvemos 100%</p>
            </div>

            <div className="bg-white/10 p-6 rounded-xl">
              <img
                src="https://i.imgur.com/4X596s6.png"
                alt="Acesso imediato"
                className="w-30 h-30 mx-auto mb-3 rounded-full object-cover"
              />
              <h3 className="text-white font-bold text-lg mb-2">Acesso Imediato</h3>
              <p className="text-white/90">Receba tudo no seu email em menos de 2 minutos</p>
            </div>

            <div className="bg-white/10 p-6 rounded-xl">
              <img
                src="https://i.imgur.com/qtTjFya.png"
                alt="Vagas limitadas"
                className="w-30 h-30 mx-auto mb-3 rounded-full object-cover"
              />
              <h3 className="text-white font-bold text-lg mb-2">Vagas Limitadas</h3>
              <p className="text-white/90">Apenas algumas gestantes terão acesso a esse preço</p>
            </div>
          </div>

          {/* Urgency (com data de hoje e contador até 23:59) */}
          <div className="bg-yellow-400 text-black p-6 rounded-xl">
            <h3 className="text-2xl font-bold mb-2">⚠️ ATENÇÃO: OFERTA LIMITADA</h3>
            <p className="text-lg font-medium">
              Devido ao valor promocional, essa condição está disponível apenas para as
              <span className="font-bold"> primeiras 10 gestantes</span> que acessarem o conteúdo.
            </p>

            <p className="text-lg font-semibold mt-4">
              🔥 Oferta válida até <span className="font-bold">{hojeFormatado}</span> às 23:59.
            </p>

            <div className="mt-3 inline-flex items-center gap-2 bg-black/10 rounded-lg px-4 py-2">
              <span className="font-semibold">Tempo restante:</span>
              <span className="font-mono text-xl">
                {two(hours)}:{two(minutes)}:{two(seconds)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
