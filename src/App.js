import React, { useEffect, useState } from 'react';

import NavBar from './components/NavBar/NavBar';
import Holder from './components/Holder/Holder';
import Notes from './components/Notes/Notes';
import OverLay from './components/Notes/OverLay';
import './App.css';

function App() {
  // Notez
  const [overlayState, setOverlayState] = useState(false);
  // The Data
  const [Save, SetSave] = useState([
    {
      id: 'and1',
      state: false,
      r_id: [''],
      r_state: [false],
      vhd: 2,
    },
    {
      id: 'and2',
      state: false,
      r_id: ['and1'],
      r_state: [false],
      vhd: 2,
    },
    {
      id: 'ensan',
      state: false,
      r_id: [''],
      r_state: [false],
      vhd: 2,
    },
    {
      id: 'hogh',
      state: false,
      r_id: [''],
      r_state: [false],
      vhd: 2,
    },
    {
      id: 'danesh',
      state: false,
      r_id: [''],
      r_state: [false],
      vhd: 2,
    },
    {
      id: 'fal',
      state: false,
      r_id: [''],
      r_state: [false],
      vhd: 2,
    },
    {
      id: 'akh',
      state: false,
      r_id: [''],
      r_state: [false],
      vhd: 2,
    },
    {
      id: 'ayin',
      state: false,
      r_id: [''],
      r_state: [false],
      vhd: 2,
    },
    {
      id: 'erfan',
      state: false,
      r_id: [''],
      r_state: [false],
      vhd: 2,
    },
    {
      id: 'englab',
      state: false,
      r_id: [''],
      r_state: [false],
      vhd: 2,
    },
    {
      id: 'ashnayi',
      state: false,
      r_id: [''],
      r_state: [false],
      vhd: 2,
    },
    {
      id: 'andishe',
      state: false,
      r_id: [''],
      r_state: [false],
      vhd: 2,
    },
    {
      id: 'englab',
      state: false,
      r_id: [''],
      r_state: [false],
      vhd: 2,
    },
    {
      id: 'andishe',
      state: false,
      r_id: [''],
      r_state: [false],
      vhd: 2,
    },
    {
      id: 'tarikh',
      state: false,
      r_id: [''],
      r_state: [false],
      vhd: 2,
    },
    {
      id: 'emam',
      state: false,
      r_id: [''],
      r_state: [false],
      vhd: 2,
    },
    {
      id: 'tarikhtahlil',
      state: false,
      r_id: [''],
      r_state: [false],
      vhd: 2,
    },
    {
      id: 'tafsir-q',
      state: false,
      r_id: [''],
      r_state: [false],
      vhd: 2,
    },
    {
      id: 'tafsir-n',
      state: false,
      r_id: [''],
      r_state: [false],
      vhd: 2,
    },
    {
      id: 'fa',
      state: false,
      r_id: [''],
      r_state: [false],
      vhd: 2,
    },
    {
      id: 'eng',
      state: false,
      r_id: [''],
      r_state: [false],
      vhd: 2,
    },
    {
      id: 'tar1',
      state: false,
      r_id: [''],
      r_state: [false],
      vhd: 1,
    },
    {
      id: 'tar2',
      state: false,
      r_id: ['tar1'],
      r_state: [false],
      vhd: 1,
    },
    {
      id: 'tanesh',
      state: false,
      r_id: [''],
      r_state: [false],
      vhd: 2,
    },
    {
      id: 'defa',
      state: false,
      r_id: [''],
      r_state: [false],
      vhd: 2,
    },
    {
      id: 'osoletlaat',
      state: false,
      r_id: ['tahlil-sys'],
      r_state: [false],
      vhd: 3,
    },
    {
      id: 'modiryat',
      state: false,
      r_id: ['tahlil-sys'],
      r_state: [false],
      vhd: 3,
    },
    {
      id: 'raneshamn',
      state: false,
      r_id: ['shabake'],
      r_state: [false],
      vhd: 3,
    },
    {
      id: 'amiyadshab',
      state: false,
      r_id: ['shabake'],
      r_state: [false],
      vhd: 3,
    },
    {
      id: 'hoshmoha',
      state: false,
      r_id: ['pish'],
      r_state: [false],
      vhd: 3,
    },
    {
      id: 'algopish',
      state: false,
      r_id: ['algo'],
      r_state: [false],
      vhd: 3,
    },
    {
      id: 'tarashibazi',
      state: false,
      r_id: ['pish'],
      r_state: [false],
      vhd: 3,
    },
    {
      id: 'graphiccom',
      state: false,
      r_id: ['pish'],
      r_state: [false],
      vhd: 3,
    },
    {
      id: 'piyadsys',
      state: false,
      r_id: ['pdata'],
      r_state: [false],
      vhd: 3,
    },
    {
      id: 'dadekavi',
      state: false,
      r_id: ['sdata', 'pdata'],
      r_state: [false, false],
      vhd: 3,
    },
    {
      id: 'az-narmafzar',
      state: false,
      r_id: ['tahlil-sys'],
      r_state: [false],
      vhd: 1,
    },
    {
      id: 'az-data',
      state: false,
      r_id: ['pdata'],
      r_state: [false],
      vhd: 1,
    },
    {
      id: 'karkah-matlab',
      state: false,
      r_id: ['signal'],
      r_state: [false],
      vhd: 1,
    },
    {
      id: 'rz1',
      state: false,
      r_id: [''],
      r_state: [false],
      vhd: 3,
    },
    {
      id: 'rz2',
      state: false,
      r_id: ['rz1'],
      r_state: [false],
      vhd: 3,
    },
    {
      id: 'fz1',
      state: false,
      r_id: [''],
      r_state: [false],
      vhd: 3,
    },
    {
      id: 'amar',
      state: false,
      r_id: ['rz2'],
      r_state: [false],
      vhd: 3,
    },
    {
      id: 'dif',
      state: false,
      r_id: ['rz1'],
      r_state: [false],
      vhd: 3,
    },
    {
      id: 'kargha-com',
      state: false,
      r_id: ['mbn'],
      r_state: [false],
      vhd: 1,
    },
    {
      id: 'az-fz2',
      state: false,
      r_id: ['fz2'],
      r_state: [false],
      vhd: 1,
    },
    {
      id: 'fz2',
      state: false,
      r_id: ['rz1'],
      r_state: [false],
      vhd: 3,
    },
    {
      id: 'tamol',
      state: false,
      r_id: ['tahlil-sys'],
      r_state: [false],
      vhd: 3,
    },
    {
      id: 'azmon-narm',
      state: false,
      r_id: ['tahlil-sys'],
      r_state: [false],
      vhd: 3,
    },
    {
      id: 'ravesh-rasmi',
      state: false,
      r_id: ['tahlil-sys'],
      r_state: [false],
      vhd: 3,
    },
    {
      id: 'objector',
      state: false,
      r_id: ['pish'],
      r_state: [false],
      vhd: 3,
    },
    {
      id: 'tahlil-sys',
      state: false,
      r_id: ['pish'],
      r_state: [false],
      vhd: 3,
    },
    {
      id: 'pdata',
      state: false,
      r_id: ['sdata'],
      r_state: [false],
      vhd: 3,
    },
    {
      id: 'trahi-zaban',
      state: false,
      r_id: ['osolcomplier'],
      r_state: [false],
      vhd: 3,
    },
    {
      id: 'moh-narm',
      state: false,
      r_id: ['tahlil-sys'],
      r_state: [false],
      vhd: 3,
    },
    {
      id: 'moh-net',
      state: false,
      r_id: ['shabake'],
      r_state: [false],
      vhd: 3,
    },
    {
      id: 'karamozi',
      state: false,
      r_id: ['80vhd'],
      r_state: [false],
      vhd: 3,
    },
    {
      id: 'proj',
      state: false,
      r_id: ['100vhd'],
      r_state: [false],
      vhd: 3,
    },
    {
      id: 'mbn',
      state: false,
      r_id: [''],
      r_state: [false],
      vhd: 3,
    },
    {
      id: 'mad_elc',
      state: false,
      r_id: ['dif'],
      r_state: [false],
      vhd: 3,
    },
    {
      id: 'gos',
      state: false,
      r_id: ['rz1', 'mbn'],
      r_state: [false, false],
      vhd: 3,
    },
    {
      id: 'pish',
      state: false,
      r_id: ['mbn'],
      r_state: [false],
      vhd: 3,
    },
    {
      id: 'sdata',
      state: false,
      r_id: ['pish', 'gos'],
      r_state: [false, false],
      vhd: 3,
    },
    {
      id: 'mad_man',
      state: false,
      r_id: ['gos'],
      r_state: [false],
      vhd: 3,
    },
    {
      id: 'nazar',
      state: false,
      r_id: ['sdata'],
      r_state: [false],
      vhd: 3,
    },
    {
      id: 'engt',
      state: false,
      r_id: ['eng'],
      r_state: [false],
      vhd: 3,
    },
    {
      id: 'ravesh',
      state: false,
      r_id: ['engt'],
      r_state: [false],
      vhd: 3,
    },
    {
      id: 'moh',
      state: false,
      r_id: ['dif', 'rz2'],
      r_state: [false, false],
      vhd: 3,
    },
    {
      id: 'memar',
      state: false,
      r_id: ['mad_man'],
      r_state: [false],
      vhd: 3,
    },
    {
      id: 'sys-amel',
      state: false,
      r_id: ['sdata', 'memar'],
      r_state: [false, false],
      vhd: 3,
    },
    {
      id: 'algo',
      state: false,
      r_id: ['sdata'],
      r_state: [false],
      vhd: 3,
    },
    {
      id: 'tarhsystem',
      state: false,
      r_id: ['memar'],
      r_state: [false],
      vhd: 3,
    },
    {
      id: 'signal',
      state: false,
      r_id: ['moh'],
      r_state: [false],
      vhd: 3,
    },
    {
      id: 'rizpar',
      state: false,
      r_id: ['memar'],
      r_state: [false],
      vhd: 3,
    },
    {
      id: 'shabake',
      state: false,
      r_id: ['sys-amel'],
      r_state: [false],
      vhd: 3,
    },
    {
      id: 'ai-sys',
      state: false,
      r_id: ['sdata'],
      r_state: [false],
      vhd: 3,
    },
    {
      id: 'osolcomplier',
      state: false,
      r_id: ['sdata'],
      r_state: [false],
      vhd: 3,
    },
    {
      id: 'az-sys-amel',
      state: false,
      r_id: ['sys-amel'],
      r_state: [false],
      vhd: 1,
    },
    {
      id: 'az-man-memari',
      state: false,
      r_id: ['memar', 'mad_elc'],
      r_state: [false, false],
      vhd: 1,
    },
    {
      id: 'az-rizpar',
      state: false,
      r_id: ['rizpar'],
      r_state: [false],
      vhd: 1,
    },
    {
      id: 'az-shabake',
      state: false,
      r_id: ['shabake'],
      r_state: [false],
      vhd: 1,
    },
    {
      id: 'omom1',
      state: false,
      r_id: [''],
      r_state: [false],
      vhd: 0,
    },
    {
      id: 'omom3',
      state: false,
      r_id: [''],
      r_state: [false],
      vhd: 0,
    },
    {
      id: 'omom4',
      state: false,
      r_id: [''],
      r_state: [false],
      vhd: 0,
    },
    {
      id: 'omom6',
      state: false,
      r_id: [''],
      r_state: [false],
      vhd: 0,
    },
    {
      id: 'omom7',
      state: false,
      r_id: [''],
      r_state: [false],
      vhd: 0,
    },
    {
      id: 'omom8',
      state: false,
      r_id: [''],
      r_state: [false],
      vhd: 0,
    },
    {
      id: 'az-ekh7',
      state: false,
      r_id: [''],
      r_state: [false],
      vhd: 0,
    },
    {
      id: 'az-ekh8',
      state: false,
      r_id: [''],
      r_state: [false],
      vhd: 0,
    },
    {
      id: 'ekh7',
      state: false,
      r_id: [''],
      r_state: [false],
      vhd: 0,
    },
    {
      id: 'ekh8',
      state: false,
      r_id: [''],
      r_state: [false],
      vhd: 0,
    },
    {
      id: '80vhd',
      state: false,
      r_id: [''],
      r_state: [false],
      vhd: 0,
    },
    {
      id: '100vhd',
      state: false,
      r_id: [''],
      r_state: [false],
      vhd: 0,
    },
    {
      vhd: 0,
      r_id: [''],
      r_state: [false],
    },
  ]);
  // Diving in
  return (
    <div className="h-max bg-gray-500 z-0">
      {overlayState && (
        <OverLay setoverlay={setOverlayState} Save={Save}></OverLay>
      )}
      <NavBar SetSave={SetSave} Save={Save} />
      <Holder SetSave={SetSave} Save={Save} />
      <Notes setoverlay={setOverlayState} />
    </div>
  );
}

export default App;
