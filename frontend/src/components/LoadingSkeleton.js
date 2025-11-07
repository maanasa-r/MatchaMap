import React from 'react';
import './LoadingSkeleton.css';

const LoadingSkeleton = () => {
    return (
        <div className="skeleton-container">
            {[1, 2, 3].map((i) => (
                <div key={i} className="skeleton-card">
                    <div className="skeleton-image"></div>
                    <div className="skeleton-content">
                        <div className="skeleton-title"></div>
                        <div className="skeleton-rating"></div>
                        <div className="skeleton-text"></div>
                        <div className="skeleton-text short"></div>
                        <div className="skeleton-buttons">
                            <div className="skeleton-button"></div>
                            <div className="skeleton-button"></div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default LoadingSkeleton;

