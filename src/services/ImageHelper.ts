import SOPPic from '@/assets/SOP/img/imgs/kros 2022/1.jpeg'
import SOPPic1 from '@/assets/SOP/img/imgs/kros 2022/2.jpeg'
import SOPPic2 from '@/assets/SOP/img/imgs/kros 2022/3.jpeg'
import SOPPic3 from '@/assets/SOP/img/imgs/kros 2022/4.jpeg'
import SOPPic4 from '@/assets/SOP/img/imgs/kros 2022/5.jpeg'
import SchoolPic from '@/assets/SOP/img/skola/1.jpeg'
import SchoolPic1 from '@/assets/SOP/img/skola/2.jpeg'
import SchoolPic2 from '@/assets/SOP/img/skola/3.jpeg'
import SchoolPic3 from '@/assets/SOP/img/skola/4.jpeg'
import SchoolPic4 from '@/assets/SOP/img/skola/5.jpeg'
import SportPic from '@/assets/SOP/img/imgs/boks/1.jpeg'
import SportPic1 from '@/assets/SOP/img/imgs/boks/2.jpeg'
import SportPic2 from '@/assets/SOP/img/imgs/boks/3.jpeg'
import SportPic3 from '@/assets/SOP/img/imgs/boks/4.jpeg'
import SportPic4 from '@/assets/SOP/img/imgs/boks/5.jpeg'
export default function ImageHelper (){
    
const sopGallery = [SOPPic, SOPPic1, SOPPic2, SOPPic3, SOPPic4]
const sportGallery = [SportPic, SportPic1, SportPic2, SportPic3, SportPic4]
const schoolGallery = [SchoolPic, SchoolPic1, SchoolPic2, SchoolPic3, SchoolPic4]
    return {sopGallery, sportGallery, schoolGallery}
}