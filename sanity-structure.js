import S from "@sanity/desk-tool/structure-builder";
import IframePreview from './preview/IFramePreview'

import {
  FiHome,
  FiAlertCircle,
  FiUser,
  FiStar,
  FiImage,
  FiMessageCircle,
  FiHeadphones
} from 'react-icons/fi'

import { getGlobalSlug, previewURL } from './utils/resolveProductionUrl'

export const getDefaultDocumentNode = ({ schemaType }) => S.document().views(getPreview(schemaType))

const getPreview = (schemaType) => {
  const globalSlug = getGlobalSlug(schemaType)
  if (globalSlug) {
    return [
      S.view.form(),
      S.view
        .component(IframePreview)
        .title('Web preview')
        .options({ previewURL, isMobile: false, globalSlug }),
      S.view
        .component(IframePreview)
        .title('Mobile preview')
        .options({ previewURL, isMobile: true, globalSlug })
    ]
  }
  return [S.view.form()]
}

export default () =>
  S.list()
    .title("Content")
    .items([
      S.listItem().title('Global').child(S.editor().id('global').schemaType('global').documentId('global').views(getPreview('global'))).icon(FiAlertCircle),
      S.divider(),
      S.listItem().title('Home').child(S.editor().id('home').schemaType('home').documentId('home').views(getPreview('home'))).icon(FiHome),
      S.divider(),
      S.listItem().title('Teachers').child(S.documentTypeList('teacher').title('Teachers')).icon(FiUser),
      S.divider(),
      S.listItem().title('Classes').child(S.documentTypeList('class').title('Classes')).icon(FiHeadphones),
      S.divider(),
      S.listItem().title('Unity').child(S.editor().id('unity').schemaType('unity').documentId('unity').views(getPreview('unity'))).icon(FiStar),
      S.divider(),
      S.listItem().title('Gallery').child(S.editor().id('gallery').schemaType('gallery').documentId('gallery').views(getPreview('gallery'))).icon(FiImage),
      S.divider(),
      S.listItem().title('Contact').child(S.editor().id('contact').schemaType('contact').documentId('contact').views(getPreview('contact'))).icon(FiMessageCircle),
      S.divider(),
    ]);