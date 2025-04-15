import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [enviado, setEnviado] = useState(0);
  const [bonus, setBonus] = useState(0);
  const [limiteBonus, setLimiteBonus] = useState(0);
  const [valorPago, setValorPago] = useState(0);

  const pontosBonus = enviado * (bonus / 100);
  const pontosRecebidos = enviado + pontosBonus;
  const maxEnvio = bonus > 0 ? limiteBonus / (bonus / 100) : 0;
  const valorPorMil = pontosRecebidos > 0 ? (valorPago / pontosRecebidos) * 1000 : 0;

  const formatarNumero = (numero) => {
    return numero.toLocaleString('pt-BR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', background: '#f0f4f8', minHeight: '100vh', padding: '2rem' }}>
      <div style={{
        maxWidth: 520,
        margin: 'auto',
        background: '#ffffff',
        borderRadius: '16px',
        padding: '2rem',
        boxShadow: '0 8px 30px rgba(0,0,0,0.1)'
      }}>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
          <Image src="/logo.jpg" alt="Logo Boaria's Viagens" width={160} height={160} />
        </div>
        <h1 style={{ fontSize: '1.75rem', fontWeight: 700, textAlign: 'center', marginBottom: '2rem' }}>
          Calculadora de Transferência
        </h1>

        <div style={{ display: 'grid', gap: '1.2rem' }}>
          <div>
            <label style={{ fontWeight: 600 }}>Pontos enviados</label>
            <input type="number" value={enviado} onChange={(e) => setEnviado(Number(e.target.value))}
              style={{ width: '100%', padding: '0.6rem', borderRadius: '8px', border: '1px solid #ccc' }} />
          </div>
          <div>
            <label style={{ fontWeight: 600 }}>% de bônus</label>
            <input type="number" value={bonus} onChange={(e) => setBonus(Number(e.target.value))}
              style={{ width: '100%', padding: '0.6rem', borderRadius: '8px', border: '1px solid #ccc' }} />
          </div>
          <div>
            <label style={{ fontWeight: 600 }}>Limite de bônus permitido</label>
            <input type="number" value={limiteBonus} onChange={(e) => setLimiteBonus(Number(e.target.value))}
              style={{ width: '100%', padding: '0.6rem', borderRadius: '8px', border: '1px solid #ccc' }} />
          </div>
          <div>
            <label style={{ fontWeight: 600 }}>Valor total pago (R$)</label>
            <input type="number" value={valorPago} onChange={(e) => setValorPago(Number(e.target.value))}
              step="0.01" style={{ width: '100%', padding: '0.6rem', borderRadius: '8px', border: '1px solid #ccc' }} />
          </div>
        </div>

        <div style={{ marginTop: '2rem', borderTop: '1px solid #e0e0e0', paddingTop: '1.2rem' }}>
          <p><strong>Pontos recebidos na cia aérea:</strong> {formatarNumero(pontosRecebidos)} pontos</p>
          <p><strong>Máximo que pode ser enviado sem exceder o bônus:</strong> {formatarNumero(maxEnvio)} pontos</p>
          <p><strong>Valor por 1.000 pontos recebidos:</strong> R$ {formatarNumero(valorPorMil)}</p>
        </div>
      </div>
    </div>
  );
}