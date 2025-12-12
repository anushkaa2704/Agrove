// AdvisoryPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdvisoryPage = () => {
  const navigate = useNavigate();
  const [selectedCrop, setSelectedCrop] = useState('wheat');

  const advisoryData = {
    wheat: {
      careTips: [
        'Sow seeds at 2-3 inch depth in well-prepared soil',
        'Maintain soil moisture during germination phase',
        'Monitor for rust and blight diseases regularly',
        'Harvest when grain moisture is around 20-25%',
      ],
      fertilizer: {
        stage1: 'Apply NPK 120:60:40 at sowing time',
        stage2: 'Top dress with 60kg Nitrogen after 21 days',
        stage3: 'Apply urea before flowering stage',
      },
      soilGuidelines: 'Best grown in loamy, well-drained soil with pH 6.0-7.5',
      commonPests: ['Aphids', 'Army worms', 'Rust disease', 'Smut'],
    },
    rice: {
      careTips: [
        'Maintain 2-3 inches of standing water during growing season',
        'Transplant seedlings at 20-25 days old',
        'Apply weed control within first 30 days',
        'Drain field 2 weeks before harvest',
      ],
      fertilizer: {
        stage1: 'Basal dose: NPK 40:40:20 before transplanting',
        stage2: 'First top dress: 30kg Nitrogen at 25 days',
        stage3: 'Second top dress: 30kg Nitrogen at panicle initiation',
      },
      soilGuidelines: 'Thrives in clay or clay-loam soil with good water retention, pH 5.5-7.0',
      commonPests: ['Stem borers', 'Leaf folders', 'Brown plant hopper', 'Blast disease'],
    },
    corn: {
      careTips: [
        'Plant seeds 1-2 inches deep with 6-8 inch spacing',
        'Ensure consistent moisture, especially during tasseling',
        'Side-dress nitrogen when plants are knee-high',
        'Monitor for ear worms during silk stage',
      ],
      fertilizer: {
        stage1: 'Apply 150:75:60 NPK at planting',
        stage2: 'Side dress with 40kg Nitrogen at V6 stage',
        stage3: 'Additional nitrogen application at V10 if needed',
      },
      soilGuidelines: 'Prefers well-drained loamy soil, pH 5.8-7.0, rich in organic matter',
      commonPests: ['Corn borers', 'Cutworms', 'Ear worms', 'Fall army worm'],
    },
  };

  const currentAdvisory = advisoryData[selectedCrop];

  return (
    <div className="page-wrapper" style={{ alignItems: 'flex-start', paddingTop: '3rem' }}>
      <div className="container" style={{ maxWidth: '1000px' }}>
        <a href="#" onClick={() => navigate('/dashboard')} className="back-link">
          ← Back to Dashboard
        </a>

        <h1 className="mb-4">Crop Advisory</h1>

        <div className="card mb-4">
          <label className="form-label">Select Crop</label>
          <select
            className="form-select"
            value={selectedCrop}
            onChange={(e) => setSelectedCrop(e.target.value)}
          >
            <option value="wheat">Wheat</option>
            <option value="rice">Rice</option>
            <option value="corn">Corn</option>
          </select>
        </div>

        <div className="advisory-section">
          <div className="advisory-card">
            <div className="advisory-card-title">
              <span style={{ fontSize: '1.75rem' }}>🌱</span>
              <span>Care Tips</span>
            </div>
            <ul className="advisory-list">
              {currentAdvisory.careTips.map((tip, index) => (
                <li key={index}>{tip}</li>
              ))}
            </ul>
          </div>

          <div className="advisory-card">
            <div className="advisory-card-title">
              <span style={{ fontSize: '1.75rem' }}>💧</span>
              <span>Fertilizer Guide</span>
            </div>
            <div className="stage-grid">
              <div className="stage-card">
                <p className="stage-card-label">Initial Stage</p>
                <p className="stage-card-content">{currentAdvisory.fertilizer.stage1}</p>
              </div>
              <div className="stage-card">
                <p className="stage-card-label">Growth Stage</p>
                <p className="stage-card-content">{currentAdvisory.fertilizer.stage2}</p>
              </div>
              <div className="stage-card">
                <p className="stage-card-label">Final Stage</p>
                <p className="stage-card-content">{currentAdvisory.fertilizer.stage3}</p>
              </div>
            </div>
          </div>

          <div className="advisory-card">
            <div className="advisory-card-title">
              <span style={{ fontSize: '1.75rem' }}>⚠️</span>
              <span>Soil Guidelines</span>
            </div>
            <p>{currentAdvisory.soilGuidelines}</p>
          </div>

          <div className="advisory-card">
            <div className="advisory-card-title">
              <span style={{ fontSize: '1.75rem' }}>🐛</span>
              <span>Common Pests & Diseases</span>
            </div>
            <div className="pest-tags">
              {currentAdvisory.commonPests.map((pest, index) => (
                <span key={index} className="pest-tag">
                  {pest}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvisoryPage;
