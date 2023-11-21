import React from 'react';
import Svg, {
  G,
  Path,
  Defs,
  RadialGradient,
  Stop,
  ClipPath,
} from 'react-native-svg';
interface Props {
  width?: number;
  height?: number;
}
const GiftSpa: React.FC<Props> = ({width, height}) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ? width : 50}
      height={height ? height : 50}
      viewBox="0 0 50 50"
      fill="none">
      <G clipPath="url(#clip0_263_117)" fillRule="evenodd" clipRule="evenodd">
        <Path
          d="M28.548 21.864c-.432 4.596.26 7.484 2.944 9 1.376.776 3.276 1.504 5.82 1.268 2.728-.252 5.012.108 6.136 2.64.608 1.376 1.012 3.424 1.328 5.528a25.21 25.21 0 01-5.808 5.444c-.048-.46-.088-.904-.112-1.332-.08.288-.192.856-.324 1.62A24.946 24.946 0 0125 50c-4.96 0-9.588-1.444-13.476-3.936-.136-.784-.248-1.364-.332-1.656-.024.436-.064.892-.116 1.364a25.145 25.145 0 01-5.816-5.42c.316-2.12.72-4.196 1.336-5.58 1.12-2.528 3.408-2.892 6.136-2.64 2.544.236 4.444-.492 5.82-1.268 2.688-1.512 3.376-4.4 2.944-9 2.068-.024 4.988-.024 7.052 0z"
          fill="#FCD5A6"
        />
        <Path
          d="M27.796 49.844c-1.836-1.476-2.608-3.94-1.092-6.492-2.604 2.044-1.9 4.728-.072 6.592.388-.024.78-.056 1.164-.1z"
          fill="#FBC88F"
        />
        <Path
          d="M32.728 47.108c-.72 0-1.304.432-1.304.968 0 .388.308.724.756.876a24.532 24.532 0 001.804-.616.714.714 0 00.048-.26c0-.536-.584-.968-1.304-.968z"
          fill="#F7C385"
        />
        <Path
          d="M32.728 47.696c-.284 0-.512.168-.512.38 0 .208.228.38.512.38.284 0 .512-.168.512-.38-.004-.208-.232-.38-.512-.38z"
          fill="#ECB46F"
        />
        <Path
          d="M22.248 49.848c1.84-1.476 2.616-3.94 1.1-6.496 2.604 2.044 1.9 4.732.068 6.596-.392-.024-.78-.056-1.168-.1z"
          fill="#FBC88F"
        />
        <Path
          d="M17.324 47.108c.72 0 1.304.432 1.304.968 0 .396-.32.736-.78.884-.6-.18-1.192-.38-1.776-.604a.749.749 0 01-.056-.284c.004-.532.588-.964 1.308-.964z"
          fill="#F7C385"
        />
        <Path
          d="M17.324 47.696c.284 0 .512.168.512.38 0 .208-.228.38-.512.38-.284 0-.512-.168-.512-.38 0-.208.228-.38.512-.38z"
          fill="#ECB46F"
        />
        <Path
          d="M9.688 44.764a288.7 288.7 0 011.256-5.312l.208 1.852.04 3.1c-.024.436-.064.892-.116 1.364-.472-.32-.936-.656-1.388-1.004zm8.324-30.604a1.695 1.695 0 00-.32-.112c-.432-.096-.512.244-.512.844.004.992.568 2.58.768 3.224.232.748.12 1.616.624 1.68a38.983 38.983 0 01-.56-5.636z"
          fill="#F7C385"
        />
        <Path
          d="M25.032 26.652h-.016c-.272 0-.548-.072-.808-.148-.836-.248-1.876-1.02-2.488-1.588-2.864-2.66-3.456-5.156-3.732-9.24-.24-3.608.268-7.9 4.248-9.204 1.108-.364 1.936-.516 2.788-.476.852-.04 1.676.116 2.788.476 3.98 1.304 4.488 5.592 4.248 9.204-.272 4.084-.868 6.584-3.728 9.24-.612.568-1.652 1.34-2.488 1.588-.264.076-.54.144-.812.148z"
          fill="#FCD5A6"
        />
        <Path
          d="M25.772 23.632c-.224.104-.464.16-.752.156a1.675 1.675 0 01-.752-.156c-.412-.192-.748-.504-1.044-.872-.028-.036-.056-.068-.08-.104l-.012-.012c.38 1.184.844 1.54 1.892 1.608 1.044-.068 1.508-.424 1.892-1.608l-.012.012c-.028.036-.052.072-.08.104-.304.372-.644.684-1.052.872zm-4.56 3.84c2.616.952 5.316.148 7.3-1.696a13.777 13.777 0 01-.068-.944c-.036.028-.076.052-.112.08-.612.568-1.652 1.34-2.488 1.588-.26.076-.536.148-.808.148h-.016c-.272 0-.548-.072-.808-.148-.836-.248-1.876-1.02-2.488-1.588-.04-.028-.076-.052-.112-.08-.044.988-.172 1.864-.4 2.64z"
          fill="#FBC88F"
        />
        <Path
          d="M25.012 22.572h.016v-.004c.572-.08 1.104.04 1.672-.056l.028-.004c-.62.22-1.08.244-1.696.244h-.02c-.62 0-1.08-.024-1.696-.244l.028.004c.564.096 1.096-.024 1.668.06zm.008 1.216c.288.004.528-.052.752-.156.412-.192.748-.504 1.044-.872.104-.132.404-.484.44-.508-.484.16-.416.024-.912-.1a2.873 2.873 0 01-.372-.124c-.208-.08-.428-.152-.58-.152a1.04 1.04 0 00-.372.08 1.04 1.04 0 00-.372-.08c-.152 0-.368.076-.58.152a4.016 4.016 0 01-.372.124c-.496.124-.512.26-.996.1.004.004.46.428.52.508.296.372.632.684 1.044.872.224.104.468.16.756.156z"
          fill="#F6B096"
        />
        <Path
          d="M23.34 22.512c.572.096 1.104-.028 1.68.056.572-.084 1.108.04 1.68-.056.008 0 .02-.004.028-.004-.62.22-1.08.244-1.696.244h-.02c-.62 0-1.08-.024-1.696-.244.004 0 .012.004.024.004z"
          fill="#C7212C"
        />
        <Path
          opacity={0.5}
          d="M20.296 16.144c-.864 0-1.644.372-2.184.96.192 1.884.528 3.416 1.264 4.824a2.967 2.967 0 003.892-2.82 2.977 2.977 0 00-2.972-2.964z"
          fill="url(#paint0_radial_263_117)"
        />
        <Path
          opacity={0.5}
          d="M29.752 16.144c.864 0 1.644.372 2.188.96-.192 1.884-.528 3.416-1.264 4.824a2.97 2.97 0 01-3.892-2.82 2.971 2.971 0 012.968-2.964z"
          fill="url(#paint1_radial_263_117)"
        />
        <Path
          d="M25.032 26.816h-.016c-.148 0-.296-.02-.44-.048a4.102 4.102 0 01-.412-.108c-.388-.116-.812-.336-1.22-.596a9.961 9.961 0 01-1.332-1.028c-1.452-1.348-2.328-2.66-2.88-4.148-.548-1.484-.764-3.144-.904-5.2-.12-1.824-.052-3.82.548-5.532.608-1.732 1.764-3.168 3.808-3.836a10.94 10.94 0 011.512-.396c.46-.08.888-.108 1.324-.088.436-.02.864.008 1.324.088.46.08.948.212 1.512.396 2.048.668 3.2 2.104 3.808 3.836.604 1.712.672 3.708.548 5.532-.136 2.056-.356 3.716-.904 5.2-.548 1.492-1.428 2.8-2.88 4.148-.344.32-.828.708-1.332 1.028-.408.26-.836.48-1.22.596-.132.04-.272.076-.416.108-.132.028-.28.044-.428.048zm-.016-.328h.016c.124 0 .248-.016.376-.044.128-.024.256-.06.384-.1.356-.108.752-.312 1.14-.56a9.502 9.502 0 001.284-.992c1.412-1.312 2.264-2.58 2.792-4.024.536-1.448.748-3.084.884-5.108.12-1.788.052-3.74-.532-5.4-.58-1.64-1.668-3.004-3.6-3.636a10.304 10.304 0 00-1.468-.384 5.675 5.675 0 00-1.26-.084h-.016c-.412-.02-.82.008-1.26.084-.444.076-.92.204-1.468.384-1.932.632-3.024 1.992-3.604 3.636-.584 1.66-.652 3.616-.532 5.4.136 2.028.348 3.66.884 5.108.532 1.444 1.384 2.712 2.792 4.024.336.312.8.684 1.284.992.384.244.784.452 1.136.56.128.04.26.072.388.1.132.024.256.044.38.044z"
          fill="#FBC88F"
          stroke="#FBC88F"
          strokeWidth={0.298}
          strokeMiterlimit={22.926}
        />
        <Path
          d="M17.692 14.052c1.152-1.288.48-1.38 3.316-1.728-.296-.988.656-3.192 1.188-4.156.076 2.024-.052 3.564 2.708 3.988-.308-.932-.296-1.756-.008-2.488-.06.948.108 1.636.704 2.524 2.236-1.836 3.776.116 5.216.764.756.34 1.992 1.972 2.176 1.636 1.956-3.628.588-6.868-.864-8.784C28.76 1.368 20.228 2 17.756 6.8c-.912 1.764-1.936 4.252-.064 7.252z"
          fill="#E8B493"
        />
        <Path
          d="M32.208 14.16c.12-.048.244-.088.36-.112.488-.096.58.244.58.844-.004.992-.644 2.58-.868 3.224-.264.748-.14 1.616-.704 1.68.352-1.784.588-3.852.632-5.636zm-.852.112c-.552-.196-.988-.492-1.568-.612-1.552-.316-2.72.668-3.028.768a3.38 3.38 0 00-.628 1.912c.76-.004 1.68.14 2.144.168 1.212.068 1.636-.312 3.08-2.236z"
          fill="#FBC88F"
        />
        <Path
          d="M26.844 14.512c.192-.032.404-.112.588-.176.94-.328 1.46-.656 2.12-.588.6.06 1.008.424 1.6.572-.876-.688-1.484-.884-2.248-.812-.444.04-2.228.416-2.356.824-.024.072-.012.12.016.152.052.052.164.048.28.028z"
          fill="#A6634B"
        />
        <Path
          d="M27 15.784c.512-.544.972-.896 1.756-.832.52.04.804.252 1.14.616l.236-.192c-.832-.864-2.036-1.02-2.908-.156-.348.344-.368.696-.492.888l.08-.104c.06-.08.12-.152.188-.22z"
          fill="#727271"
        />
        <Path
          d="M27.164 15.616c-.144.232-.016.592.26.652a4.99 4.99 0 001.436.052c.508-.1.772-.34 1.02-.776-.336-.364-.604-.548-1.128-.592-.696-.056-1.14.22-1.588.664z"
          fill="#EBECEC"
        />
        <Path
          d="M28.504 15.02c.292 0 .532.256.532.572 0 .316-.236.572-.532.572-.292 0-.528-.256-.528-.572 0-.316.236-.572.528-.572z"
          fill="#86755D"
        />
        <Path
          opacity={0.5}
          d="M27.728 15.472c.268-.128.536-.172.804-.164.484.012.868.116 1.264.376.028-.044.056-.092.084-.14-.336-.364-.604-.548-1.128-.592-.784-.064-1.244.288-1.756.832a3.58 3.58 0 00-.188.22l-.108.14c.116-.004.2.008.284.024.088-.116.172-.228.26-.328a1.58 1.58 0 01.484-.368z"
          fill="#AF9778"
        />
        <Path
          d="M28.504 15.4a.19.19 0 01.192.192.192.192 0 01-.192.192.195.195 0 01-.192-.192c0-.108.088-.192.192-.192z"
          fill="#434242"
        />
        <Path
          d="M28.256 15.736a.076.076 0 110 .152.076.076 0 010-.152zm.324-.348c.064 0 .116.052.116.12a.116.116 0 01-.232 0 .112.112 0 01.116-.12z"
          fill="#EBECEC"
        />
        <Path
          d="M29.54 15.196c.228-.036.408-.156.572-.296-.1.204-.232.356-.412.424a4.48 4.48 0 01-.16-.128zm.18.22c.208-.06.544-.228.712-.36a1.49 1.49 0 01-.548.508c-.052-.048-.108-.108-.164-.148zm-.464-.352c.236-.048.384-.132.568-.28-.112.216-.208.308-.384.384-.06-.032-.12-.068-.184-.104zm.1 1.064c.18.044.312.148.432.268-.068-.168-.16-.296-.3-.36-.04.032-.088.06-.132.092zm.156-.16c.164.06.416.212.544.332a1.172 1.172 0 00-.404-.436c-.044.028-.092.072-.14.104zm-.388.248a.952.952 0 01.432.256c-.076-.176-.148-.26-.28-.328-.048.024-.1.048-.152.072z"
          fill="#86755D"
        />
        <Path
          d="M18.696 14.272c.552-.196.988-.492 1.568-.612 1.552-.316 2.72.668 3.028.768a3.38 3.38 0 01.628 1.912c-.76-.004-1.68.14-2.144.168-1.212.068-1.636-.312-3.08-2.236z"
          fill="#FBC88F"
        />
        <Path
          d="M23.204 14.512c-.192-.032-.404-.112-.588-.176-.94-.328-1.46-.656-2.12-.588-.6.06-1.008.424-1.6.572.876-.688 1.484-.884 2.248-.812.444.04 2.228.416 2.356.824.024.072.012.12-.016.152-.052.052-.164.048-.28.028z"
          fill="#A6634B"
        />
        <Path
          d="M23.052 15.784c-.512-.544-.972-.896-1.756-.832-.52.04-.804.252-1.14.616l-.236-.192c.832-.864 2.036-1.02 2.908-.156.348.344.368.696.492.888l-.08-.104a3.58 3.58 0 00-.188-.22z"
          fill="#727271"
        />
        <Path
          d="M22.888 15.616c.144.232.016.592-.26.652a4.99 4.99 0 01-1.436.052c-.508-.1-.772-.34-1.02-.776.336-.364.604-.548 1.128-.592.692-.056 1.136.22 1.588.664z"
          fill="#EBECEC"
        />
        <Path
          d="M21.544 15.02c-.292 0-.532.256-.532.572 0 .316.236.572.532.572.292 0 .528-.256.528-.572.004-.316-.236-.572-.528-.572z"
          fill="#86755D"
        />
        <Path
          opacity={0.5}
          d="M22.324 15.472a1.708 1.708 0 00-.804-.164c-.484.012-.868.116-1.264.376a4.317 4.317 0 01-.084-.14c.336-.364.604-.548 1.128-.592.784-.064 1.244.288 1.756.832.064.068.124.14.188.22l.108.14a1.14 1.14 0 00-.28.024c-.088-.116-.172-.228-.26-.328a1.703 1.703 0 00-.488-.368z"
          fill="#AF9778"
        />
        <Path
          d="M21.544 15.4a.192.192 0 000 .384.195.195 0 00.192-.192.19.19 0 00-.192-.192z"
          fill="#434242"
        />
        <Path
          d="M21.792 15.736a.076.076 0 10.076.076.074.074 0 00-.076-.076zm-.32-.348a.12.12 0 00-.12.12c0 .064.052.116.12.116a.116.116 0 00.116-.116.117.117 0 00-.116-.12z"
          fill="#EBECEC"
        />
        <Path
          d="M20.508 15.196c-.228-.036-.408-.156-.572-.296.1.204.232.356.412.424.056-.04.108-.084.16-.128zm-.18.22a2.593 2.593 0 01-.712-.36c.1.176.356.416.548.508.052-.048.112-.108.164-.148zm.464-.352a1.207 1.207 0 01-.568-.28c.112.216.208.308.384.384.06-.032.12-.068.184-.104zm-.212.984a.889.889 0 00-.468.204c.088-.156.2-.272.348-.316.04.036.08.072.12.112zm-.132-.184c-.168.036-.44.152-.584.252a1.21 1.21 0 01.46-.376c.04.04.084.088.124.124zm.352.3a.952.952 0 00-.464.192c.1-.164.18-.236.324-.284.044.032.092.064.14.092z"
          fill="#86755D"
        />
        <Path
          d="M39.104 39.452l-1.552 7.172c.332-.192.656-.392.976-.6.132-.764.244-1.332.324-1.62l.04-3.1.212-1.852zm-28.156 0l1.556 7.204a24.603 24.603 0 01-.98-.596c-.136-.784-.248-1.364-.332-1.656l-.04-3.1-.204-1.852z"
          fill="#F7C385"
        />
        <Path
          d="M27.832 32.956c1.956-.86 4.208-.232 6.34-.948l1.312.176c-2.4.84-6.788 1.64-9.232 1.788-.004-.104-.004-.212-.008-.316l1.588-.7zm-5.992 0c-1.956-.86-4.208-.232-6.34-.948l-1.312.176c2.4.84 6.788 1.64 9.232 1.788.004-.104.004-.212.008-.316l-1.588-.7z"
          fill="#FBC88F"
        />
        <Path
          d="M40.352 44.732c-.404-1.78-.82-3.544-1.252-5.28l-.208 1.852-.04 3.1c.024.428.06.872.112 1.332.476-.316.94-.652 1.388-1.004zm-30.664.032a288.7 288.7 0 011.256-5.312l.208 1.852.04 3.1c-.024.436-.064.892-.116 1.364-.472-.32-.936-.656-1.388-1.004z"
          fill="#F7C385"
        />
        <Path
          d="M20.652 9.916c3.7-.276 9.968 1.072 10.992 5.112.58 2.288.256 3.584-.204 5.632 1.44-.888 1.276-2.684 1.72-4.172.184-.616.42-1.276.548-1.796 1.648-6.612-1.164-8.64-1.284-8.86-1.66-1.704-1.916-2.244-3.872-2.832-1.724.54-5.836 4.092-7.9 6.916z"
          fill="#E8ECED"
        />
        <Path
          d="M17.924 7.288c3.34-4.008 10.648-5.964 14.852-1.652C31.196.684 25.54-.388 21.3 1.028c-2.356.784-5.184 3.912-3.376 6.26z"
          fill="#E8ECED"
        />
        <Path
          d="M21.464 9.704c4.924-6.136 9.952-2.524 11.552-3.184.128-.864-.344-1.932-.992-2.656-2.904-3.24-11.732.108-14.336 3.004-2.752 3.532-1.396 6.524-.528 11.28.208 2.124.904 2.036 1.472 2.552-1.268-5.396-.08-7.016 2.832-10.996z"
          fill="#E8ECED"
        />
        <Path
          d="M31.828 3.664C28.892.928 19.448 2.292 17.404 6.148c-.056.36.004.44.228.812 2.828-3.592 10.716-4.904 14.196-3.296z"
          fill="#D8C9B6"
        />
        <Path
          d="M26.672 19.928l-.18.076c-.108.072-.176-.024-.328-.064-.048-.012-.104-.016-.172-.012a.463.463 0 00-.176.048c-.276.144-.284.304-.468.444a.632.632 0 01-.324.112.598.598 0 01-.324-.112c-.18-.136-.192-.296-.468-.444a.463.463 0 00-.176-.048.465.465 0 00-.172.012c-.152.04-.22.136-.328.064l-.18-.076c.456.42 1.004.792 1.648.752.644.044 1.196-.328 1.648-.752z"
          fill="#F4C185"
        />
        <Path
          d="M25 47.264C18.656 42.84 14.4 44 11.216 44.704c-.004.396-.004.78.004 1.16a24.811 24.811 0 0011.584 4.04l.036.004.144.012.036.004.036.004.144.012.036.004.036.004h.036l.108.008.036.004h.036l.036.004.108.008h.144l.064.004.156.008H24.068l.148.004h.036a22.398 22.398 0 001.468 0h.036l.152-.004H26.012l.116-.004.068-.004.036-.004.072-.004h.036l.108-.008h.004l.036-.004h.036l.036-.004.144-.008.036-.004.036-.004.144-.012.036-.004.036-.004.108-.008.036-.004.036-.004.036-.004.036-.004.108-.008.036-.004.036-.004.144-.016.036-.004.036-.004.036-.004.108-.012.036-.004.036-.004.036-.004.108-.012.036-.004a24.892 24.892 0 0010.72-3.948c.008-.38.008-.764.004-1.16-3.16-.7-7.416-1.86-13.76 2.564z"
          fill="#F08068"
        />
        <Path
          d="M29.548 47.656c-1.308-1.872-1.816-3.32-4.388-2.528.608 2.624 2.112 2.336 4.388 2.528z"
          fill="#A8C969"
        />
        <Path
          d="M28.2 46.74c-.66-.944-.912-1.672-2.208-1.272.304 1.32 1.064 1.176 2.208 1.272z"
          fill="#BEE07C"
        />
        <Path
          d="M22.12 48.28c.58-1.68.652-2.872 2.748-2.828.104 2.092-1.084 2.196-2.748 2.828z"
          fill="#A8C969"
        />
        <Path
          d="M22.784 47.552c.392-1.136.44-1.94 1.856-1.908.068 1.412-.736 1.484-1.856 1.908z"
          fill="#BEE07C"
        />
        <Path
          opacity={0.5}
          d="M25.948 43.996l.024-.024c.56-.584.708-1.42.056-2.12-.068 0-.136.004-.2.008-.828.08-1.276.716-1.328 1.464-.004.056-.004.108-.004.16a1.208 1.208 0 00-.072-.144c-.388-.708-1.144-1.104-2.004-.692a1.71 1.71 0 00-.052.192c-.172.816.3 1.432.996 1.708.052.02.1.036.152.052l-.156.024c-.792.16-1.396.756-1.264 1.704.056.04.112.076.168.108.724.408 1.456.144 1.928-.436.036-.044.068-.084.096-.128l-.024.156c-.088.804.304 1.56 1.244 1.716.056-.04.104-.084.152-.128.608-.568.576-1.344.164-1.968a1.485 1.485 0 00-.092-.128c.044.024.092.048.144.068.74.324 1.58.18 2.012-.672-.024-.064-.048-.128-.076-.184-.356-.752-1.108-.956-1.828-.748l-.036.012z"
          fill="#BF9F8B"
        />
        <Path
          d="M25.52 44.488c.272-.136.524-.284.756-.528.576-.6.728-1.46.06-2.18-.072 0-.14 0-.204.008-.852.08-1.316.736-1.368 1.508-.036.528.132.932.272 1.428.168-.088.332-.16.484-.236z"
          fill="#DDDBDB"
        />
        <Path
          d="M24.964 44.192c-.048-.3-.112-.584-.276-.88-.4-.728-1.176-1.136-2.064-.712-.02.068-.04.132-.052.196-.18.836.308 1.476 1.024 1.756.496.196.928.156 1.444.168-.032-.184-.052-.36-.076-.528z"
          fill="#DDDBDB"
        />
        <Path
          d="M24.684 44.04a1.87 1.87 0 00-.208-.656c-.3-.544-.876-.848-1.54-.532-.016.048-.032.1-.04.148-.132.624.228 1.1.764 1.312.368.144.692.116 1.076.124-.02-.136-.032-.268-.052-.396z"
          fill="#EF9AA6"
        />
        <Path
          d="M24.512 44.632c-.3-.044-.592-.068-.924 0-.816.164-1.436.78-1.3 1.752.056.04.116.076.172.112.744.424 1.5.152 1.984-.452.332-.412.428-.84.592-1.324-.184-.028-.356-.06-.524-.088z"
          fill="#DDDBDB"
        />
        <Path
          d="M24.212 44.92a1.657 1.657 0 00-.628 0c-.556.112-.98.532-.888 1.196.04.028.08.052.116.076.508.288 1.024.104 1.352-.308.228-.28.292-.572.404-.904-.124-.02-.24-.044-.356-.06z"
          fill="#EF9AA6"
        />
        <Path
          d="M24.796 45.196c-.132.272-.24.544-.276.88-.092.828.312 1.604 1.28 1.768.056-.044.108-.088.156-.132.628-.584.596-1.384.168-2.028-.292-.444-.672-.66-1.088-.964-.08.168-.164.32-.24.476z"
          fill="#DDDBDB"
        />
        <Path
          d="M24.984 45.504c-.096.2-.176.396-.204.644-.064.604.228 1.176.94 1.296.04-.032.08-.064.116-.096.46-.428.436-1.016.124-1.488-.216-.324-.492-.484-.796-.708-.064.124-.124.24-.18.352z"
          fill="#EF9AA6"
        />
        <Path
          d="M25.42 45.096c.22.208.444.392.756.528.76.336 1.624.184 2.072-.692a2.044 2.044 0 00-.076-.188c-.368-.772-1.14-.984-1.884-.768-.508.148-.832.444-1.248.744.132.128.256.256.38.376z"
          fill="#DDDBDB"
        />
        <Path
          d="M25.684 45.024c.172.164.352.312.596.416.6.264 1.284.148 1.636-.544a2.826 2.826 0 00-.06-.148c-.292-.612-.9-.776-1.488-.608-.404.116-.656.348-.984.588.104.104.2.204.3.296zm-.12-.848c.204-.1.392-.212.564-.396.428-.448.544-1.092.044-1.632-.052 0-.104 0-.152.008-.636.06-.984.552-1.02 1.128-.028.396.096.696.204 1.068.124-.064.244-.12.36-.176z"
          fill="#EF9AA6"
        />
        <Path
          d="M25.428 43.84a.963.963 0 01.492 1.268.96.96 0 01-1.268.492.96.96 0 01-.492-1.268.957.957 0 011.268-.492z"
          fill="#F5B2B6"
        />
        <Path
          d="M25.336 44.04a.744.744 0 11-.6 1.36.744.744 0 01.6-1.36z"
          fill="#EE7A77"
        />
        <Path
          d="M25.24 44.264a.501.501 0 11-.406.917.501.501 0 01.406-.917z"
          fill="#D53641"
        />
        <Path
          d="M23.572 10c1.052-2.736 2.948-3.06 5.112-2.988a11.987 11.987 0 01.716.048l.34.036c1.236.148 2.108.332 3.172-.08.112-.044.224-.092.34-.148-.1-.16-.132-.292-.224-.412-.824.564-6.076-4.26-11.768 3.52.824-.176 2.04 0 2.312.024z"
          fill="#D8C9B6"
        />
        <Path
          d="M25.02 21.532c-1.084.24-1.78.348-2.776.944.824 1.456 1.484 1.816 2.776 2.2 1.292-.388 1.948-.748 2.776-2.2-.996-.596-1.692-.704-2.776-.944zm0 4.716c-.684-.2-1.14-.376-1.532-.588-.644-.344-1.232-.784-1.796-1.268a14.246 14.246 0 01-1.576-1.604c-2.372-2.796-2.588-8.116-.036-10.076.496-.38 1.32-.668 2.136-.732 1.284-.1 1.712.488 2.804.828 1.092-.336 1.52-.924 2.804-.828.812.064 1.636.352 2.136.732 2.552 1.96 2.336 7.276-.036 10.076-.42.496-.92 1.036-1.576 1.604-.56.484-1.152.924-1.792 1.268-.4.212-.852.388-1.536.588zm5.984-10.68c0-2.728-5.1-2.728-5.1 0 0 1.144 1.14 2.076 2.548 2.076 1.408 0 2.552-.928 2.552-2.076zm-11.972 0c0 1.144 1.14 2.076 2.552 2.076 1.408 0 2.552-.928 2.552-2.076 0-2.724-5.104-2.724-5.104 0z"
          fill="#F08068"
        />
        <Path
          d="M21.568 12.632c-.764 0-1.504.324-2.036.796-.628.552-.948 1.272-.992 2.172-.084 1.764 1.3 3.076 3.016 3.016 1.716-.06 3.016-1.352 3.016-3.016 0-1.152-.684-2.08-1.632-2.588-.42-.232-.856-.38-1.372-.38z"
          fill="#8BA83B"
        />
        <Path
          d="M21.56 12.844c-.552 0-1.072.204-1.504.488-.392.256-.688.644-.912 1.044-.208.372-.356.752-.356 1.22 0 .496.16.908.392 1.312.052.092.108.18.168.268.228.336.512.644.86.836.4.224.84.424 1.332.424.616 0 1.28-.272 1.748-.628.412-.312.636-.704.804-1.172.116-.316.24-.672.24-1.04-.008-.708-.344-1.564-.912-1.992-.068-.052-.252-.252-.324-.296a2.867 2.867 0 00-1.536-.464z"
          fill="#D9F0B4"
        />
        <Path
          d="M21.864 14.924c.184-.152.784-.732.576-.968-.092-.104-.196-.112-.284-.072a.32.32 0 00-.172.208c-.076.264-.136.56-.12.832zm.372.344c.236 0 1.072-.056 1.064-.368-.004-.14-.08-.212-.168-.236a.336.336 0 00-.268.048 2.452 2.452 0 00-.628.556zm.068.504c.18.152.86.644 1.052.4.088-.108.076-.212.024-.292a.342.342 0 00-.232-.136c-.276-.028-.576-.036-.844.028zm-.272.428c.04.236.244 1.048.548.984.136-.028.196-.116.204-.208a.356.356 0 00-.092-.256c-.192-.196-.416-.396-.66-.52zm-.484.152c-.12.204-.488.956-.212 1.108.124.068.224.04.292-.028a.334.334 0 00.092-.256c-.02-.272-.064-.572-.172-.824zm-.472-.192c-.224.08-.988.42-.872.712.052.128.144.172.24.164a.342.342 0 00.236-.136c.16-.22.316-.48.396-.74zm-.232-.452c-.224-.084-1.028-.312-1.128-.016-.044.132 0 .228.08.28.076.052.18.068.268.048.264-.064.548-.16.78-.312zm.108-.496c-.116-.208-.588-.9-.852-.736-.12.072-.144.172-.12.264a.343.343 0 00.172.208c.248.12.528.232.8.264zm.404-.308c.044-.232.132-1.068-.18-1.112-.136-.02-.224.04-.264.124a.339.339 0 000 .272c.112.252.256.516.444.716zM28.324 12.632c-.764 0-1.504.324-2.036.796-.628.552-.948 1.272-.992 2.172-.084 1.764 1.3 3.076 3.016 3.016 1.716-.06 3.016-1.352 3.016-3.016 0-1.152-.684-2.08-1.632-2.588-.42-.232-.856-.38-1.372-.38z"
          fill="#8BA83B"
        />
        <Path
          d="M28.316 12.844c-.552 0-1.072.204-1.504.488-.392.256-.688.644-.912 1.044-.208.372-.356.752-.356 1.22 0 .496.16.908.392 1.312.052.092.108.18.168.268.228.336.512.644.86.836.4.224.84.424 1.332.424.616 0 1.28-.272 1.748-.628.412-.312.636-.704.804-1.172.116-.316.24-.672.24-1.04-.008-.708-.344-1.564-.912-1.992-.068-.052-.252-.252-.324-.296a2.867 2.867 0 00-1.536-.464z"
          fill="#D9F0B4"
        />
        <Path
          d="M28.62 14.924c.184-.152.784-.732.576-.968-.092-.104-.196-.112-.284-.072a.32.32 0 00-.172.208c-.076.264-.136.56-.12.832zm.372.344c.236 0 1.072-.056 1.064-.368-.004-.14-.08-.212-.168-.236a.336.336 0 00-.268.048 2.452 2.452 0 00-.628.556zm.068.504c.18.152.86.644 1.052.4.088-.108.076-.212.024-.292a.342.342 0 00-.232-.136c-.276-.028-.576-.036-.844.028zm-.276.428c.04.236.244 1.048.548.984.136-.028.196-.116.204-.208a.356.356 0 00-.092-.256c-.188-.196-.412-.396-.66-.52zm-.484.152c-.12.204-.488.956-.212 1.108.124.068.224.04.292-.028a.334.334 0 00.092-.256 2.526 2.526 0 00-.172-.824zm-.468-.192c-.224.08-.988.42-.872.712.052.128.144.172.24.164a.342.342 0 00.236-.136c.16-.22.316-.48.396-.74zm-.232-.452c-.224-.084-1.028-.312-1.128-.016-.044.132 0 .228.08.28.076.052.18.068.268.048.264-.064.548-.16.78-.312zm.108-.496c-.116-.208-.588-.9-.852-.736-.12.072-.144.172-.12.264a.343.343 0 00.172.208c.248.12.528.232.8.264zm.404-.308c.044-.232.132-1.068-.18-1.112-.136-.02-.224.04-.264.124a.339.339 0 000 .272c.112.252.256.516.444.716z"
          fill="#8BA83B"
        />
      </G>
      <Defs>
        <RadialGradient
          id="paint0_radial_263_117"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(21.046 19.23) scale(2.95857)">
          <Stop stopColor="#F9B098" />
          <Stop offset={1} stopColor="#FED09E" />
        </RadialGradient>
        <RadialGradient
          id="paint1_radial_263_117"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(29.725 19.23) scale(2.95857)">
          <Stop stopColor="#F9B098" />
          <Stop offset={1} stopColor="#FED09E" />
        </RadialGradient>
        <ClipPath id="clip0_263_117">
          <Path fill="#fff" d="M0 0H50V50H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default GiftSpa;