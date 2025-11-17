import { XMarkIcon } from '@heroicons/react/24/solid';

function ProfileModal({ profile, onCloseModal }) {

  const handleRecommend = () => {
    alert(`Obrigado por recomendar ${profile.nome}!`);
  };
  
  const handleMessage = () => {
    alert(`Abrindo chat para enviar mensagem para ${profile.nome}...`);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center 
                 bg-black bg-opacity-75 backdrop-blur-sm"
      onClick={onCloseModal}
    >
      <div 
        className="bg-white dark:bg-gray-800 rounded-lg shadow-2xl 
                   w-11/12 md:w-3/4 lg:w-2/3 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative p-6 md:p-8">
          
          <button 
            onClick={onCloseModal}
            className="absolute top-4 right-4 p-1 rounded-full text-gray-500 
                       dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            <XMarkIcon className="h-6 w-6" />
          </button>

          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            <img 
              src={profile.foto} 
              alt={profile.nome} 
              className="w-32 h-32 rounded-full border-4 border-blue-500" 
            />
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-bold">{profile.nome}</h2>
              <p className="text-xl text-blue-600 dark:text-blue-400">{profile.cargo}</p>
              <p className="text-md text-gray-500 dark:text-gray-400 mt-1">{profile.localizacao}</p>
              <p className="mt-4 text-gray-700 dark:text-gray-300">{profile.resumo}</p>
            </div>
          </div>
          
          <div className="mt-6 flex flex-col md:flex-row gap-4">
            <button 
              onClick={handleRecommend}
              className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg 
                         font-semibold hover:bg-blue-700 transition-colors"
            >
              Recomendar Profissional
            </button>
            <button 
              onClick={handleMessage}
              className="flex-1 bg-green-500 text-white px-4 py-2 rounded-lg 
                         font-semibold hover:bg-green-600 transition-colors"
            >
              Enviar Mensagem
            </button>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <Section title="Habilidades Técnicas">
                <div className="flex flex-wrap gap-2">
                  {profile.habilidadesTecnicas.map(s => <Tag key={s} text={s} />)}
                </div>
              </Section>
              
              <Section title="Soft Skills">
                <div className="flex flex-wrap gap-2">
                  {profile.softSkills.map(s => <Tag key={s} text={s} type="soft" />)}
                </div>
              </Section>

              <Section title="Interesses">
                <div className="flex flex-wrap gap-2">
                  {profile.arealnteresses.map(s => <Tag key={s} text={s} type="interest" />)}
                </div>
              </Section>

              <Section title="Idiomas">
                {profile.idiomas.map(i => (
                  <p key={i.idioma}>{i.idioma} ({i.nivel})</p>
                ))}
              </Section>
            </div>

            <div>
              <Section title="Experiência">
                {profile.experiencias.map((exp, i) => (
                  <div key={i} className="mb-4">
                    <h4 className="font-semibold">{exp.cargo}</h4>
                    <p className="text-sm text-blue-500">{exp.empresa}</p>
                    <p className="text-xs text-gray-500">{exp.inicio} - {exp.fim}</p>
                    <p className="text-sm mt-1">{exp.descricao}</p>
                  </div>
                ))}
              </Section>

              <Section title="Formação">
                {profile.formacao.map((f, i) => (
                  <div key={i} className="mb-4">
                    <h4 className="font-semibold">{f.curso}</h4>
                    <p className="text-sm text-blue-500">{f.instituicao}</p>
                    <p className="text-xs text-gray-500">Conclusão: {f.ano}</p>
                  </div>
                ))}
              </Section>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <div className="mb-6">
      <h3 className="text-lg font-semibold border-b-2 border-blue-500 dark:border-blue-400 pb-1 mb-3">
        {title}
      </h3>
      {children}
    </div>
  );
}

function Tag({ text, type = "hard" }) {
  const colors = {
    hard: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
    soft: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
    interest: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
  };
  return (
    <span className={`px-3 py-1 text-sm font-medium rounded-full ${colors[type]}`}>
      {text}
    </span>
  );
}

export default ProfileModal;