import React from 'react'
import styles from '../../public_style/Tag.module.scss'
import CodeIcon from '@mui/icons-material/Code';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import ConstructionIcon from '@mui/icons-material/Construction';
import SvgIcon from '@mui/material/SvgIcon';
export default function Tag({ type, name }) {
    const typeList = {
        'FE': CodeIcon,
        'BE': IntegrationInstructionsIcon,
        'DEVOPS':ConstructionIcon
    }
    const icon = typeList[type]
    return (
        <>
            <div className={styles.warp}> 
                <SvgIcon
                    component={typeList[type]}
                    sx={{ fontSize: 14 }}
                />
                {name}
            </div>
        </>
    )
}
