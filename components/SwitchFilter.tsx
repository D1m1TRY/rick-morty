import {TypeWrapper, TypeOption} from '@/styling/TypeFilter'
import {speciesTypes} from '@/helpers/constants'

export default function SwitchFilter(props) {
    const {activeType, setActiveType} = props
    
    return <TypeWrapper>
        {speciesTypes.map(type => (
            <TypeOption 
                key={type.id} 
                isActive={activeType.id === type.id} 
                onClick={() => setActiveType(type)}
            >
                {type.value}
            </TypeOption>
        ))}
    </TypeWrapper>
} 