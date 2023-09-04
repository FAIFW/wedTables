import React, { useEffect } from 'react';
import './style.css'
import icon from '../img/icon.png'

const Tables = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '/script.js'; 
    script.async = true;

    script.onload = () => {
    };

    script.onerror = () => {
      console.error('Ошибка при загрузке скрипта');
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <div class="stage-container">
    <div class="stage-header" id="stage-header">
      <h1>Выберите стол</h1>
    </div>
    <div class="stage-indicators" id="stage-indicators">
      <span class="stage-indicator active" data-stage="1">1</span>
      <span class="stage-indicator" data-stage="2">2</span>
      <span class="stage-indicator" data-stage="3">3</span>
    </div>
    <div class="wedding_img" id="wedding_img">
      <img src={icon} alt="icon"/>
    </div>
    <div class="table-grid" id="table-grid">
    </div>
  </div>
  )
}

export default Tables