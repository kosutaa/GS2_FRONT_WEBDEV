import { useState, useEffect } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import ProfileCard from './components/ProfileCard';
import ProfileModal from './components/ProfileModal';

function App() {
  const [allProfiles, setAllProfiles] = useState([]);
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch('/db.json')
      .then(response => response.json())
      .then(data => {
        setAllProfiles(data.perfis);
      })
      .catch(error => console.error("Erro ao carregar perfis:", error));
  }, []);

  const lowerCaseSearch = searchTerm.toLowerCase();
  const filteredProfiles = allProfiles.filter(profile => {
    const inName = profile.nome.toLowerCase().includes(lowerCaseSearch);
    const inCargo = profile.cargo.toLowerCase().includes(lowerCaseSearch);
    const inSkills = profile.habilidadesTecnicas.some(skill => 
      skill.toLowerCase().includes(lowerCaseSearch)
    );
    
    return inName || inCargo || inSkills;
  });

  const handleOpenModal = (profile) => {
    setSelectedProfile(profile);
  };

  const handleCloseModal = () => {
    setSelectedProfile(null);
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      
      <Header />

      <main className="container mx-auto p-4 md:p-8">
        
        <SearchBar onSearchChange={setSearchTerm} />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
          
          {filteredProfiles.length > 0 ? (
            filteredProfiles.map(profile => (
              <ProfileCard 
                key={profile.Id} 
                profile={profile} 
                onOpenModal={handleOpenModal} 
              />
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500">
              {allProfiles.length === 0 ? "Carregando perfis..." : "Nenhum perfil encontrado."}
            </p>
          )}
        </div>

      </main>
      
      {selectedProfile && (
        <ProfileModal 
          profile={selectedProfile} 
          onCloseModal={handleCloseModal} 
        />
      )}
    </div>
  );
}

export default App;