
import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Search, Plus, ListOrdered, Paperclip, Upload, Download, Trash2, X } from 'lucide-react';

// Mock data
const mockManualNiches = [
  { id: 1, cuenta_a_usar: '@hunter_social', cuenta_a_trackear: '@competidor1', tipo_palabra_clave: 'Competencia Directa', estado: 'activo', added_by_username: 'admin', created_at: new Date().toISOString() },
  { id: 2, cuenta_a_usar: '@hunter_corp', cuenta_a_trackear: '@potencial_cliente', tipo_palabra_clave: 'Lead - Interés en Marketing', estado: 'activo', added_by_username: 'admin', created_at: new Date().toISOString() },
  { id: 3, cuenta_a_usar: '@hunter_corp', cuenta_a_trackear: '@influencer123', tipo_palabra_clave: 'Influencer - Nicho Tecnología', estado: 'pausado', added_by_username: 'marketing', created_at: new Date().toISOString() },
];

const mockUploads = [
  { id: 1, uploaded_at: new Date().toISOString(), tipo_nicho: 'Tecnología B2B', original_filename: 'tech_leads_marzo2025.csv', size: 254000, uploaded_by_username: 'admin' },
  { id: 2, uploaded_at: new Date().toISOString(), tipo_nicho: 'E-commerce', original_filename: 'ecommerce_prospects_q2.csv', size: 187000, uploaded_by_username: 'sales' },
];

const TrackingPage = () => {
  const { t } = useLanguage();
  const [manualModalOpen, setManualModalOpen] = useState(false);
  const [bulkModalOpen, setBulkModalOpen] = useState(false);
  const [manualSearch, setManualSearch] = useState('');
  const [manualNiches] = useState(mockManualNiches);
  const [uploads] = useState(mockUploads);

  // Filter niche entries based on search
  const filteredNiches = manualNiches.filter(niche => 
    manualSearch === '' || 
    Object.values(niche).some(value => 
      value && typeof value === 'string' && 
      value.toLowerCase().includes(manualSearch.toLowerCase())
    )
  );

  // Format file size
  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#0a0a10] text-[#e5e7eb]">
      <Navbar />
      
      <div className="trackeo-page-container pt-24 md:pt-28 pb-16 px-4 flex-grow">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-10">{t('trackeo_nichos')}</h1>
          
          {/* Manual Tracking Section */}
          <section className="bg-[#111827] rounded-2xl p-6 md:p-8 mb-10 border border-[rgba(76,175,145,0.25)] shadow-lg relative overflow-hidden">
            {/* Section Border Accent */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#4caf91] to-transparent opacity-50"></div>
            
            <div className="flex flex-wrap justify-between items-center mb-6 pb-4 border-b border-[rgba(76,175,145,0.25)]">
              <h2 className="text-2xl font-semibold text-[#5cdb95] flex items-center gap-3">
                <i className="fas fa-pencil-alt"></i> 
                {t('seguimiento_manual')}
              </h2>
              
              <div className="flex flex-wrap gap-3 mt-4 sm:mt-0">
                <Button 
                  variant="secondary" 
                  size="sm"
                  className="text-sm bg-[#1f2937] text-[#9ca3af] border border-[rgba(76,175,145,0.25)]"
                  onClick={() => setBulkModalOpen(true)}
                >
                  <ListOrdered className="h-4 w-4 mr-2" />
                  {t('lote')}
                </Button>
                <Button 
                  variant="default" 
                  size="sm"
                  className="text-sm bg-gradient-to-br from-[#4caf91] to-[#5cdb95] text-[#0a0a10]"
                  onClick={() => setManualModalOpen(true)}
                >
                  <Plus className="h-4 w-4 mr-2" />
                  {t('agregar')}
                </Button>
              </div>
            </div>
            
            <div className="flex items-center gap-2 bg-black/10 p-3 rounded-md mb-6">
              <Search className="text-[#9ca3af] h-4 w-4" />
              <input 
                type="search" 
                className="flex-1 bg-transparent border-none text-[#e5e7eb] placeholder-[#9ca3af] text-sm focus:outline-none focus:ring-0"
                placeholder={`${t('filtrar')}...`}
                value={manualSearch}
                onChange={(e) => setManualSearch(e.target.value)}
              />
            </div>
            
            <div className="overflow-x-auto border border-[rgba(76,175,145,0.25)] rounded-md">
              <table className="w-full border-collapse text-sm">
                <thead className="sticky top-0 bg-[#1f2937]/90 backdrop-blur-sm">
                  <tr>
                    <th className="p-3 text-left text-xs font-semibold text-[#5cdb95] uppercase border-b-2 border-[#4caf91]">{t('cuenta_efectuar')}</th>
                    <th className="p-3 text-left text-xs font-semibold text-[#5cdb95] uppercase border-b-2 border-[#4caf91]">{t('cuenta_trackear')}</th>
                    <th className="p-3 text-left text-xs font-semibold text-[#5cdb95] uppercase border-b-2 border-[#4caf91]">{t('tipo_keyword')}</th>
                    <th className="p-3 text-left text-xs font-semibold text-[#5cdb95] uppercase border-b-2 border-[#4caf91]">{t('estado')}</th>
                    <th className="p-3 text-left text-xs font-semibold text-[#5cdb95] uppercase border-b-2 border-[#4caf91]">{t('agregado_por')}</th>
                    <th className="p-3 text-left text-xs font-semibold text-[#5cdb95] uppercase border-b-2 border-[#4caf91]">{t('fecha')}</th>
                    <th className="p-3 text-left text-xs font-semibold text-[#5cdb95] uppercase border-b-2 border-[#4caf91]">{t('acciones')}</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredNiches.length > 0 ? (
                    filteredNiches.map(niche => (
                      <tr 
                        key={niche.id} 
                        className="border-b border-[rgba(76,175,145,0.25)] hover:bg-[rgba(76,175,145,0.08)] transition-colors"
                      >
                        <td className="p-3">{niche.cuenta_a_usar}</td>
                        <td className="p-3">{niche.cuenta_a_trackear}</td>
                        <td className="p-3 text-[#9ca3af] italic max-w-[250px] break-words">{niche.tipo_palabra_clave}</td>
                        <td className="p-3">
                          <select 
                            className="bg-black/20 text-[#e5e7eb] border border-[rgba(76,175,145,0.25)] rounded p-1 text-sm cursor-pointer"
                            defaultValue={niche.estado}
                          >
                            <option value="activo">{t('activo')}</option>
                            <option value="pausado">{t('pausado')}</option>
                            <option value="finalizado">{t('finalizado')}</option>
                          </select>
                        </td>
                        <td className="p-3 text-sm text-[#9ca3af]">{niche.added_by_username}</td>
                        <td className="p-3 text-sm text-[#9ca3af]">
                          {new Date(niche.created_at).toLocaleDateString()}
                        </td>
                        <td className="p-3">
                          <button 
                            className="bg-[#f87171] text-white w-8 h-8 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                            title={t('eliminar')}
                          >
                            <Trash2 size={14} />
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={7} className="p-6 text-center text-[#9ca3af] italic">{t('no_seguimientos')}</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </section>
          
          {/* CSV Upload Section */}
          <section className="bg-[#111827] rounded-2xl p-6 md:p-8 border border-[rgba(76,175,145,0.25)] shadow-lg relative overflow-hidden">
            {/* Section Border Accent */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#4caf91] to-transparent opacity-50"></div>
            
            <div className="flex flex-wrap justify-between items-center mb-6 pb-4 border-b border-[rgba(76,175,145,0.25)]">
              <h2 className="text-2xl font-semibold text-[#5cdb95] flex items-center gap-3">
                <i className="fas fa-file-csv"></i>
                {t('archivos_csv')}
              </h2>
              
              <form className="flex flex-wrap gap-3 items-center mt-4 sm:mt-0">
                <input 
                  type="text" 
                  placeholder={`${t('tipo_nicho')}*`}
                  className="px-3 py-2 text-sm bg-black/20 border border-[rgba(76,175,145,0.25)] rounded text-[#e5e7eb] placeholder-[#9ca3af] focus:border-[#4caf91] focus:ring focus:ring-[rgba(76,175,145,0.2)] transition-all"
                />
                <div className="relative">
                  <input 
                    type="file" 
                    id="csvFile" 
                    className="absolute inset-0 opacity-0 w-full cursor-pointer" 
                    accept=".csv" 
                  />
                  <Button 
                    variant="secondary" 
                    size="sm"
                    className="text-sm bg-[#1f2937] text-[#9ca3af] border border-[rgba(76,175,145,0.25)]"
                  >
                    <Paperclip className="h-4 w-4 mr-2" />
                    {t('seleccionar')}*
                  </Button>
                </div>
                <Button 
                  variant="default" 
                  size="sm"
                  className="text-sm bg-gradient-to-br from-[#4caf91] to-[#5cdb95] text-[#0a0a10]"
                  type="submit"
                >
                  <Upload className="h-4 w-4 mr-2" />
                  {t('subir')}
                </Button>
              </form>
            </div>
            
            {uploads.length > 0 ? (
              <div className="overflow-x-auto border border-[rgba(76,175,145,0.25)] rounded-md">
                <table className="w-full border-collapse text-sm">
                  <thead className="sticky top-0 bg-[#1f2937]/90 backdrop-blur-sm">
                    <tr>
                      <th className="p-3 text-left text-xs font-semibold text-[#5cdb95] uppercase border-b-2 border-[#4caf91]">{t('fecha_subida')}</th>
                      <th className="p-3 text-left text-xs font-semibold text-[#5cdb95] uppercase border-b-2 border-[#4caf91]">{t('tipo_nicho')}</th>
                      <th className="p-3 text-left text-xs font-semibold text-[#5cdb95] uppercase border-b-2 border-[#4caf91]">{t('nombre_original')}</th>
                      <th className="p-3 text-right text-xs font-semibold text-[#5cdb95] uppercase border-b-2 border-[#4caf91]">{t('tamaño')}</th>
                      <th className="p-3 text-left text-xs font-semibold text-[#5cdb95] uppercase border-b-2 border-[#4caf91]">{t('subido_por')}</th>
                      <th className="p-3 text-left text-xs font-semibold text-[#5cdb95] uppercase border-b-2 border-[#4caf91]">{t('acciones')}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {uploads.map(upload => (
                      <tr 
                        key={upload.id} 
                        className="border-b border-[rgba(76,175,145,0.25)] hover:bg-[rgba(76,175,145,0.08)] transition-colors"
                      >
                        <td className="p-3">
                          {new Date(upload.uploaded_at).toLocaleString()}
                        </td>
                        <td className="p-3">{upload.tipo_nicho}</td>
                        <td className="p-3" title={upload.original_filename}>
                          {upload.original_filename.length > 35 
                            ? upload.original_filename.substring(0, 32) + '...' 
                            : upload.original_filename}
                        </td>
                        <td className="p-3 text-right font-mono">{formatFileSize(upload.size)}</td>
                        <td className="p-3 text-sm text-[#9ca3af]">{upload.uploaded_by_username}</td>
                        <td className="p-3 flex gap-2">
                          <button 
                            className="bg-[#6ee7b7] text-[#0a0a10] w-8 h-8 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                            title={t('descargar')}
                          >
                            <Download size={14} />
                          </button>
                          <button 
                            className="bg-[#f87171] text-white w-8 h-8 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                            title={t('eliminar')}
                          >
                            <Trash2 size={14} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <p className="text-center text-[#9ca3af] italic py-6">{t('no_archivos')}</p>
            )}
          </section>
        </div>
      </div>
      
      {/* Manual Tracking Modal */}
      {manualModalOpen && (
        <div className="fixed inset-0 bg-black/75 backdrop-blur-sm flex justify-center items-center z-50 p-4">
          <div className="bg-[#1f2937] rounded-2xl w-full max-w-md shadow-2xl">
            <div className="p-5 flex justify-between items-center border-b border-[rgba(76,175,145,0.25)] bg-black/20">
              <h3 className="text-xl font-semibold text-[#e5e7eb]">{t('agregar_seguimiento')}</h3>
              <button 
                onClick={() => setManualModalOpen(false)}
                className="text-[#9ca3af] hover:text-[#5cdb95] transition-colors text-2xl"
              >
                <X size={24} />
              </button>
            </div>
            
            <form className="p-6">
              <div className="mb-4">
                <label className="block text-[#9ca3af] text-sm font-medium mb-2">
                  {t('cuenta_trackear')}*
                </label>
                <input 
                  type="text" 
                  className="w-full p-3 bg-black/25 border border-[rgba(76,175,145,0.25)] rounded-md text-[#e5e7eb] placeholder-[#9ca3af]/60 focus:border-[#4caf91] focus:ring focus:ring-[rgba(76,175,145,0.3)] transition-all"
                  placeholder={t('cuenta_trackear_placeholder')}
                  required
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-[#9ca3af] text-sm font-medium mb-2">
                  {t('cuenta_efectuar')}*
                </label>
                <input 
                  type="text" 
                  className="w-full p-3 bg-black/25 border border-[rgba(76,175,145,0.25)] rounded-md text-[#e5e7eb] placeholder-[#9ca3af]/60 focus:border-[#4caf91] focus:ring focus:ring-[rgba(76,175,145,0.3)] transition-all"
                  placeholder={t('cuenta_usar_placeholder')}
                  required
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-[#9ca3af] text-sm font-medium mb-2">
                  {t('tipo_keyword')}*
                </label>
                <input 
                  type="text" 
                  className="w-full p-3 bg-black/25 border border-[rgba(76,175,145,0.25)] rounded-md text-[#e5e7eb] placeholder-[#9ca3af]/60 focus:border-[#4caf91] focus:ring focus:ring-[rgba(76,175,145,0.3)] transition-all"
                  placeholder={t('tipo_keyword_placeholder')}
                  required
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-[#9ca3af] text-sm font-medium mb-2">
                  {t('notas')}
                </label>
                <textarea 
                  className="w-full p-3 bg-black/25 border border-[rgba(76,175,145,0.25)] rounded-md text-[#e5e7eb] placeholder-[#9ca3af]/60 focus:border-[#4caf91] focus:ring focus:ring-[rgba(76,175,145,0.3)] transition-all resize-y min-h-[60px]"
                  rows={2}
                ></textarea>
              </div>
              
              <div className="flex justify-end gap-3 mt-6 border-t border-[rgba(76,175,145,0.25)] pt-4">
                <Button 
                  variant="secondary" 
                  size="sm"
                  className="bg-[#1f2937] text-[#9ca3af] border border-[rgba(76,175,145,0.25)]"
                  onClick={() => setManualModalOpen(false)}
                >
                  {t('cancelar')}
                </Button>
                <Button 
                  variant="default" 
                  size="sm"
                  className="bg-gradient-to-br from-[#4caf91] to-[#5cdb95] text-[#0a0a10]"
                  type="submit"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  {t('agregar')}
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
      
      {/* Bulk Add Modal */}
      {bulkModalOpen && (
        <div className="fixed inset-0 bg-black/75 backdrop-blur-sm flex justify-center items-center z-50 p-4">
          <div className="bg-[#1f2937] rounded-2xl w-full max-w-2xl shadow-2xl">
            <div className="p-5 flex justify-between items-center border-b border-[rgba(76,175,145,0.25)] bg-black/20">
              <h3 className="text-xl font-semibold text-[#e5e7eb]">{t('agregar_lote')}</h3>
              <button 
                onClick={() => setBulkModalOpen(false)}
                className="text-[#9ca3af] hover:text-[#5cdb95] transition-colors text-2xl"
              >
                <X size={24} />
              </button>
            </div>
            
            <form className="p-6">
              <p className="text-sm mb-1">
                <small className="text-gray-400">Pega aquí las entradas, una por línea, separadas por coma (,).</small>
              </p>
              <p className="mb-4">
                <strong className="text-white">{t('formato')}:</strong> <code className="bg-black/20 px-1 rounded text-gray-300">cuenta_a_usar, cuenta_a_trackear, tipo/palabra_clave</code>
              </p>
              
              <div className="mb-4">
                <label className="block text-[#9ca3af] text-sm font-medium mb-2">
                  {t('entradas')}:
                </label>
                <textarea 
                  className="w-full p-3 bg-black/25 border border-[rgba(76,175,145,0.25)] rounded-md text-[#e5e7eb] font-mono text-sm focus:border-[#4caf91] focus:ring focus:ring-[rgba(76,175,145,0.3)] transition-all resize-y min-h-[200px] whitespace-pre"
                  rows={10}
                  placeholder={`@nuestra_cuenta1, @competidor1, Competencia Fuerte
@nuestra_cuenta1, @lead_interesante, Lead Caliente - Enviar Promo X
@nuestra_cuenta2, @otro_perfil, Interés Viajes - Baja Interacción`}
                  required
                ></textarea>
              </div>
              
              <div className="flex justify-end gap-3 mt-6 border-t border-[rgba(76,175,145,0.25)] pt-4">
                <Button 
                  variant="secondary" 
                  size="sm"
                  className="bg-[#1f2937] text-[#9ca3af] border border-[rgba(76,175,145,0.25)]"
                  onClick={() => setBulkModalOpen(false)}
                >
                  {t('cancelar')}
                </Button>
                <Button 
                  variant="default" 
                  size="sm"
                  className="bg-gradient-to-br from-[#4caf91] to-[#5cdb95] text-[#0a0a10]"
                  type="submit"
                >
                  <ListOrdered className="h-4 w-4 mr-2" />
                  {t('agregar')}
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
      
      <Footer />
    </div>
  );
};

export default TrackingPage;
