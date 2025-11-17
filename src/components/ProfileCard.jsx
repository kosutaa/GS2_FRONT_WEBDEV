function ProfileCard({ profile, onOpenModal }) {
  return (
    <div 
      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden
                 cursor-pointer hover:shadow-xl transition-all duration-300
                 hover:scale-105"
      onClick={() => onOpenModal(profile)}
    >
      <img 
        src={profile.foto} 
        alt={`Foto de ${profile.nome}`} 
        className="w-full h-48 object-cover object-center" 
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold truncate" title={profile.nome}>
          {profile.nome}
        </h3>
        <p className="text-sm text-blue-600 dark:text-blue-400 truncate" title={profile.cargo}>
          {profile.cargo}
        </p>
        
        <div className="mt-4 flex flex-wrap gap-2 h-14 overflow-hidden">
          {profile.habilidadesTecnicas.slice(0, 3).map((skill, index) => (
            <span 
              key={index} 
              className="px-2 py-0.5 bg-gray-200 dark:bg-gray-700 text-xs
                         font-medium rounded-full"
            >
              {skill}
            </span>
          ))}
          {profile.habilidadesTecnicas.length > 3 && (
            <span className="px-2 py-0.5 bg-gray-200 dark:bg-gray-700 text-xs font-medium rounded-full">
              +...
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;