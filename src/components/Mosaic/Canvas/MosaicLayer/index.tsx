import React from 'react';

import { MOSAIC_DATA } from '../../constants';

const getLayerTileFileName = ({ xGrid = 0, yGrid = 0, layer = 0 }: {xGrid: number; yGrid: number; layer: number;}) => {
    const { path, xGrouping, yGrouping } = MOSAIC_DATA.layers;
    return `${path}/${layer}/l${layer}x${xGrouping}y${yGrouping}_${xGrid},${yGrid}.jpg`;
}

const getLayerTileWidth = (layer: number = 0) => {
    const { pieceDimensions } = MOSAIC_DATA;
    const baseWidth = pieceDimensions.width * pieceDimensions.multiplier;
    return baseWidth * (layer + 1); 
}

const getLayerTileHeight = (layer: number = 0) => {
    const { pieceDimensions } = MOSAIC_DATA;
    const baseWidth = pieceDimensions.height * pieceDimensions.multiplier;
    return baseWidth * (layer + 1); 
}

const Mosaic2LayerTile: React.FC<{
    xGrid: number;
    yGrid: number;
    layer: number;
    width: number;
    height: number;
}> = ({
    xGrid = 0,
    yGrid = 0,
    layer = 0,
    width = 100,
    height = 100,
}) => {
    const fileName = getLayerTileFileName({ xGrid, yGrid, layer });
    const width = 
}

const Mosaic2Layer: React.FC<{ layer: number }> = ({ layer = 0 }) => {
    // get zoom
    // figure out which images we need
    // if they do not exist, create them


}