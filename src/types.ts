// Auto generated from JSON

export interface Param {
    key: string;
    value: string;
}

export interface ServiceTrackingParam {
    service: string;
    params: Param[];
}

export interface MainAppWebResponseContext {
    datasyncId: string;
    loggedOut: boolean;
}

export interface WebResponseContextExtensionData {
    hasDecorated: boolean;
}

export interface ResponseContext {
    serviceTrackingParams: ServiceTrackingParam[];
    mainAppWebResponseContext: MainAppWebResponseContext;
    webResponseContextExtensionData: WebResponseContextExtensionData;
}

export interface YpcGetOfflineUpsellEndpoint {
    params: string;
}

export interface ServiceEndpoint {
    clickTrackingParams: string;
    ypcGetOfflineUpsellEndpoint: YpcGetOfflineUpsellEndpoint;
}

export interface ButtonRenderer {
    serviceEndpoint: ServiceEndpoint;
    trackingParams: string;
}

export interface Offlineability {
    buttonRenderer: ButtonRenderer;
}

export interface MiniplayerRenderer {
    playbackMode: string;
}

export interface Miniplayer {
    miniplayerRenderer: MiniplayerRenderer;
}

export interface PlayabilityStatus {
    status: string;
    playableInEmbed: boolean;
    offlineability: Offlineability;
    miniplayer: Miniplayer;
    contextParams: string;
}

export interface Format {
    itag: number;
    url: string;
    mimeType: string;
    bitrate: number;
    width: number;
    height: number;
    lastModified: string;
    contentLength: string;
    quality: string;
    fps: number;
    qualityLabel: string;
    projectionType: string;
    averageBitrate: number;
    audioQuality: string;
    approxDurationMs: string;
    audioSampleRate: string;
    audioChannels: number;
}

export interface InitRange {
    start: string;
    end: string;
}

export interface IndexRange {
    start: string;
    end: string;
}

export interface ColorInfo {
    primaries: string;
    transferCharacteristics: string;
    matrixCoefficients: string;
}

export interface AdaptiveFormat {
    itag: number;
    url: string;
    mimeType: string;
    bitrate: number;
    width: number;
    height: number;
    initRange: InitRange;
    indexRange: IndexRange;
    lastModified: string;
    contentLength: string;
    quality: string;
    fps: number;
    qualityLabel: string;
    projectionType: string;
    averageBitrate: number;
    approxDurationMs: string;
    colorInfo: ColorInfo;
    highReplication?: boolean;
    audioQuality: string;
    audioSampleRate: string;
    audioChannels?: number;
    loudnessDb?: number;
}

export interface StreamingData {
    expiresInSeconds: string;
    formats: Format[];
    adaptiveFormats: AdaptiveFormat[];
}

export interface PlayerAdParams {
    showContentThumbnail: boolean;
    enabledEngageTypes: string;
}

export interface GutParams {
    tag: string;
}

export interface PlayerLegacyDesktopWatchAdsRenderer {
    playerAdParams: PlayerAdParams;
    gutParams: GutParams;
    showCompanion: boolean;
    showInstream: boolean;
    useGut: boolean;
}

export interface PlayerAd {
    playerLegacyDesktopWatchAdsRenderer: PlayerLegacyDesktopWatchAdsRenderer;
}

export interface VideostatsPlaybackUrl {
    baseUrl: string;
}

export interface VideostatsDelayplayUrl {
    baseUrl: string;
}

export interface VideostatsWatchtimeUrl {
    baseUrl: string;
}

export interface PtrackingUrl {
    baseUrl: string;
}

export interface QoeUrl {
    baseUrl: string;
}

export interface AtrUrl {
    baseUrl: string;
    elapsedMediaTimeSeconds: number;
}

export interface YoutubeRemarketingUrl {
    baseUrl: string;
    elapsedMediaTimeSeconds: number;
}

export interface PlaybackTracking {
    videostatsPlaybackUrl: VideostatsPlaybackUrl;
    videostatsDelayplayUrl: VideostatsDelayplayUrl;
    videostatsWatchtimeUrl: VideostatsWatchtimeUrl;
    ptrackingUrl: PtrackingUrl;
    qoeUrl: QoeUrl;
    atrUrl: AtrUrl;
    videostatsScheduledFlushWalltimeSeconds: number[];
    videostatsDefaultFlushIntervalSeconds: number;
    youtubeRemarketingUrl: YoutubeRemarketingUrl;
}

export interface Name {
    simpleText: string;
}

export interface CaptionTrack {
    baseUrl: string;
    name: Name;
    vssId: string;
    languageCode: string;
    isTranslatable: boolean;
    kind: string;
}

export interface AudioTrack {
    captionTrackIndices: number[];
    defaultCaptionTrackIndex: number;
    visibility: string;
    hasDefaultTrack: boolean;
    captionsInitialState: string;
}

export interface LanguageName {
    simpleText: string;
}

export interface TranslationLanguage {
    languageCode: string;
    languageName: LanguageName;
}

export interface PlayerCaptionsTracklistRenderer {
    captionTracks: CaptionTrack[];
    audioTracks: AudioTrack[];
    translationLanguages: TranslationLanguage[];
    defaultAudioTrackIndex: number;
}

export interface Captions {
    playerCaptionsTracklistRenderer: PlayerCaptionsTracklistRenderer;
}

export interface Thumbnail2 {
    url: string;
    width: number;
    height: number;
}

export interface Thumbnail {
    thumbnails: Thumbnail2[];
}

export interface VideoDetails {
    videoId: string;
    title: string;
    lengthSeconds: string;
    keywords: string[];
    channelId: string;
    isOwnerViewing: boolean;
    shortDescription: string;
    isCrawlable: boolean;
    thumbnail: Thumbnail;
    allowRatings: boolean;
    viewCount: string;
    author: string;
    isPrivate: boolean;
    isUnpluggedCorpus: boolean;
    isLiveContent: boolean;
}

export interface Thumbnail3 {
    url: string;
    width: number;
    height: number;
}

export interface Watermark {
    thumbnails: Thumbnail3[];
}

export interface WebCommandMetadata {
    url: string;
    webPageType: string;
    rootVe: number;
    apiUrl: string;
}

export interface CommandMetadata {
    webCommandMetadata: WebCommandMetadata;
}

export interface BrowseEndpoint {
    browseId: string;
}

export interface NavigationEndpoint {
    clickTrackingParams: string;
    commandMetadata: CommandMetadata;
    browseEndpoint: BrowseEndpoint;
}

export interface Run {
    text: string;
}

export interface ButtonText {
    runs: Run[];
}

export interface Run2 {
    text: string;
}

export interface SubscribedButtonText {
    runs: Run2[];
}

export interface Run3 {
    text: string;
}

export interface UnsubscribedButtonText {
    runs: Run3[];
}

export interface Run4 {
    text: string;
}

export interface UnsubscribeButtonText {
    runs: Run4[];
}

export interface WebCommandMetadata2 {
    sendPost: boolean;
    apiUrl: string;
}

export interface CommandMetadata2 {
    webCommandMetadata: WebCommandMetadata2;
}

export interface SubscribeEndpoint {
    channelIds: string[];
    params: string;
}

export interface Run5 {
    text: string;
}

export interface DialogMessage {
    runs: Run5[];
}

export interface Run6 {
    text: string;
}

export interface Text {
    runs: Run6[];
}

export interface WebCommandMetadata3 {
    sendPost: boolean;
    apiUrl: string;
}

export interface CommandMetadata3 {
    webCommandMetadata: WebCommandMetadata3;
}

export interface UnsubscribeEndpoint {
    channelIds: string[];
    params: string;
}

export interface ServiceEndpoint3 {
    clickTrackingParams: string;
    commandMetadata: CommandMetadata3;
    unsubscribeEndpoint: UnsubscribeEndpoint;
}

export interface Accessibility {
    label: string;
}

export interface ButtonRenderer2 {
    style: string;
    size: string;
    isDisabled: boolean;
    text: Text;
    serviceEndpoint: ServiceEndpoint3;
    accessibility: Accessibility;
    trackingParams: string;
}

export interface ConfirmButton {
    buttonRenderer: ButtonRenderer2;
}

export interface Run7 {
    text: string;
}

export interface Text2 {
    runs: Run7[];
}

export interface Accessibility2 {
    label: string;
}

export interface ButtonRenderer3 {
    style: string;
    size: string;
    isDisabled: boolean;
    text: Text2;
    accessibility: Accessibility2;
    trackingParams: string;
}

export interface CancelButton {
    buttonRenderer: ButtonRenderer3;
}

export interface ConfirmDialogRenderer {
    trackingParams: string;
    dialogMessages: DialogMessage[];
    confirmButton: ConfirmButton;
    cancelButton: CancelButton;
    primaryIsCancel: boolean;
}

export interface Popup {
    confirmDialogRenderer: ConfirmDialogRenderer;
}

export interface OpenPopupAction {
    popup: Popup;
    popupType: string;
}

export interface Action {
    clickTrackingParams: string;
    openPopupAction: OpenPopupAction;
}

export interface SignalServiceEndpoint {
    signal: string;
    actions: Action[];
}

export interface ServiceEndpoint2 {
    clickTrackingParams: string;
    commandMetadata: CommandMetadata2;
    subscribeEndpoint: SubscribeEndpoint;
    signalServiceEndpoint: SignalServiceEndpoint;
}

export interface AccessibilityData {
    label: string;
}

export interface SubscribeAccessibility {
    accessibilityData: AccessibilityData;
}

export interface AccessibilityData2 {
    label: string;
}

export interface UnsubscribeAccessibility {
    accessibilityData: AccessibilityData2;
}

export interface SubscribeButtonRenderer {
    buttonText: ButtonText;
    subscribed: boolean;
    enabled: boolean;
    type: string;
    channelId: string;
    showPreferences: boolean;
    subscribedButtonText: SubscribedButtonText;
    unsubscribedButtonText: UnsubscribedButtonText;
    trackingParams: string;
    unsubscribeButtonText: UnsubscribeButtonText;
    serviceEndpoints: ServiceEndpoint2[];
    subscribeAccessibility: SubscribeAccessibility;
    unsubscribeAccessibility: UnsubscribeAccessibility;
}

export interface SubscribeButton {
    subscribeButtonRenderer: SubscribeButtonRenderer;
}

export interface FeaturedChannel {
    startTimeMs: string;
    endTimeMs: string;
    watermark: Watermark;
    trackingParams: string;
    navigationEndpoint: NavigationEndpoint;
    channelName: string;
    subscribeButton: SubscribeButton;
}

export interface PlayerAnnotationsExpandedRenderer {
    featuredChannel: FeaturedChannel;
    allowSwipeDismiss: boolean;
    annotationId: string;
}

export interface Annotation {
    playerAnnotationsExpandedRenderer: PlayerAnnotationsExpandedRenderer;
}

export interface AudioConfig {
    loudnessDb: number;
    perceptualLoudnessDb: number;
    enablePerFormatLoudness: boolean;
}

export interface StreamSelectionConfig {
    maxBitrate: string;
}

export interface DynamicReadaheadConfig {
    maxReadAheadMediaTimeMs: number;
    minReadAheadMediaTimeMs: number;
    readAheadGrowthRateMs: number;
}

export interface MediaCommonConfig {
    dynamicReadaheadConfig: DynamicReadaheadConfig;
}

export interface WebCommandMetadata4 {
    sendPost: boolean;
    apiUrl: string;
}

export interface CommandMetadata4 {
    webCommandMetadata: WebCommandMetadata4;
}

export interface WebPlayerShareEntityServiceEndpoint {
    serializedShareEntity: string;
}

export interface GetSharePanelCommand {
    clickTrackingParams: string;
    commandMetadata: CommandMetadata4;
    webPlayerShareEntityServiceEndpoint: WebPlayerShareEntityServiceEndpoint;
}

export interface WebCommandMetadata5 {
    sendPost: boolean;
    apiUrl: string;
}

export interface CommandMetadata5 {
    webCommandMetadata: WebCommandMetadata5;
}

export interface SubscribeEndpoint2 {
    channelIds: string[];
    params: string;
}

export interface SubscribeCommand {
    clickTrackingParams: string;
    commandMetadata: CommandMetadata5;
    subscribeEndpoint: SubscribeEndpoint2;
}

export interface WebCommandMetadata6 {
    sendPost: boolean;
    apiUrl: string;
}

export interface CommandMetadata6 {
    webCommandMetadata: WebCommandMetadata6;
}

export interface UnsubscribeEndpoint2 {
    channelIds: string[];
    params: string;
}

export interface UnsubscribeCommand {
    clickTrackingParams: string;
    commandMetadata: CommandMetadata6;
    unsubscribeEndpoint: UnsubscribeEndpoint2;
}

export interface WebCommandMetadata7 {
    sendPost: boolean;
    apiUrl: string;
}

export interface CommandMetadata7 {
    webCommandMetadata: WebCommandMetadata7;
}

export interface Action2 {
    addedVideoId: string;
    action: string;
}

export interface PlaylistEditEndpoint {
    playlistId: string;
    actions: Action2[];
}

export interface AddToWatchLaterCommand {
    clickTrackingParams: string;
    commandMetadata: CommandMetadata7;
    playlistEditEndpoint: PlaylistEditEndpoint;
}

export interface WebCommandMetadata8 {
    sendPost: boolean;
    apiUrl: string;
}

export interface CommandMetadata8 {
    webCommandMetadata: WebCommandMetadata8;
}

export interface Action3 {
    action: string;
    removedVideoId: string;
}

export interface PlaylistEditEndpoint2 {
    playlistId: string;
    actions: Action3[];
}

export interface RemoveFromWatchLaterCommand {
    clickTrackingParams: string;
    commandMetadata: CommandMetadata8;
    playlistEditEndpoint: PlaylistEditEndpoint2;
}

export interface WebPlayerActionsPorting {
    getSharePanelCommand: GetSharePanelCommand;
    subscribeCommand: SubscribeCommand;
    unsubscribeCommand: UnsubscribeCommand;
    addToWatchLaterCommand: AddToWatchLaterCommand;
    removeFromWatchLaterCommand: RemoveFromWatchLaterCommand;
}

export interface WebPlayerConfig {
    webPlayerActionsPorting: WebPlayerActionsPorting;
}

export interface PlayerConfig {
    audioConfig: AudioConfig;
    streamSelectionConfig: StreamSelectionConfig;
    mediaCommonConfig: MediaCommonConfig;
    webPlayerConfig: WebPlayerConfig;
}

export interface PlayerStoryboardSpecRenderer {
    spec: string;
}

export interface Storyboards {
    playerStoryboardSpecRenderer: PlayerStoryboardSpecRenderer;
}

export interface Thumbnail5 {
    url: string;
    width: number;
    height: number;
}

export interface Thumbnail4 {
    thumbnails: Thumbnail5[];
}

export interface Embed {
    iframeUrl: string;
    flashUrl: string;
    width: number;
    height: number;
    flashSecureUrl: string;
}

export interface Title {
    simpleText: string;
}

export interface Description {
    simpleText: string;
}

export interface PlayerMicroformatRenderer {
    thumbnail: Thumbnail4;
    embed: Embed;
    title: Title;
    description: Description;
    lengthSeconds: string;
    ownerProfileUrl: string;
    externalChannelId: string;
    isFamilySafe: boolean;
    availableCountries: string[];
    isUnlisted: boolean;
    hasYpcMetadata: boolean;
    viewCount: string;
    category: string;
    publishDate: string;
    ownerChannelName: string;
    uploadDate: string;
}

export interface Microformat {
    playerMicroformatRenderer: PlayerMicroformatRenderer;
}

export interface Message {
    simpleText: string;
}

export interface ChangeEngagementPanelVisibilityAction {
    targetId: string;
    visibility: string;
}

export interface OnTapCommand {
    clickTrackingParams: string;
    changeEngagementPanelVisibilityAction: ChangeEngagementPanelVisibilityAction;
}

export interface SimpleCardTeaserRenderer {
    message: Message;
    trackingParams: string;
    prominent: boolean;
    logVisibilityUpdates: boolean;
    onTapCommand: OnTapCommand;
}

export interface Teaser {
    simpleCardTeaserRenderer: SimpleCardTeaserRenderer;
}

export interface CueRange {
    startCardActiveMs: string;
    endCardActiveMs: string;
    teaserDurationMs: string;
    iconAfterTeaserMs: string;
}

export interface CardRenderer {
    teaser: Teaser;
    cueRanges: CueRange[];
    trackingParams: string;
}

export interface Card {
    cardRenderer: CardRenderer;
}

export interface HeaderText {
    simpleText: string;
}

export interface InfoCardIconRenderer {
    trackingParams: string;
}

export interface Icon {
    infoCardIconRenderer: InfoCardIconRenderer;
}

export interface InfoCardIconRenderer2 {
    trackingParams: string;
}

export interface CloseButton {
    infoCardIconRenderer: InfoCardIconRenderer2;
}

export interface CardCollectionRenderer {
    cards: Card[];
    headerText: HeaderText;
    icon: Icon;
    closeButton: CloseButton;
    trackingParams: string;
    allowTeaserDismiss: boolean;
    logIconVisibilityUpdates: boolean;
}

export interface Cards {
    cardCollectionRenderer: CardCollectionRenderer;
}

export interface InterpreterSafeUrl {
    privateDoNotAccessOrElseTrustedResourceUrlWrappedValue: string;
}

export interface BotguardData {
    program: string;
    interpreterSafeUrl: InterpreterSafeUrl;
    serverEnvironment: number;
}

export interface PlayerAttestationRenderer {
    challenge: string;
    botguardData: BotguardData;
}

export interface Attestation {
    playerAttestationRenderer: PlayerAttestationRenderer;
}

export interface Thumbnail6 {
    url: string;
    width: number;
    height: number;
}

export interface Image {
    thumbnails: Thumbnail6[];
}

export interface AccessibilityData3 {
    label: string;
}

export interface Accessibility3 {
    accessibilityData: AccessibilityData3;
}

export interface Title2 {
    accessibility: Accessibility3;
    simpleText: string;
}

export interface Metadata {
    simpleText: string;
}

export interface WebCommandMetadata9 {
    url: string;
    webPageType: string;
    rootVe: number;
    apiUrl: string;
}

export interface CommandMetadata9 {
    webCommandMetadata: WebCommandMetadata9;
}

export interface CommonConfig {
    url: string;
}

export interface Html5PlaybackOnesieConfig {
    commonConfig: CommonConfig;
}

export interface WatchEndpointSupportedOnesieConfig {
    html5PlaybackOnesieConfig: Html5PlaybackOnesieConfig;
}

export interface VssLoggingContext {
    serializedContextData: string;
}

export interface LoggingContext {
    vssLoggingContext: VssLoggingContext;
}

export interface WatchEndpoint {
    videoId: string;
    watchEndpointSupportedOnesieConfig: WatchEndpointSupportedOnesieConfig;
    playlistId: string;
    loggingContext: LoggingContext;
}

export interface BrowseEndpoint2 {
    browseId: string;
}

export interface Endpoint {
    clickTrackingParams: string;
    commandMetadata: CommandMetadata9;
    watchEndpoint: WatchEndpoint;
    browseEndpoint: BrowseEndpoint2;
}

export interface AccessibilityData4 {
    label: string;
}

export interface Accessibility4 {
    accessibilityData: AccessibilityData4;
}

export interface Text3 {
    accessibility: Accessibility4;
    simpleText: string;
}

export interface ThumbnailOverlayTimeStatusRenderer {
    text: Text3;
    style: string;
}

export interface ThumbnailOverlay {
    thumbnailOverlayTimeStatusRenderer: ThumbnailOverlayTimeStatusRenderer;
}

export interface Thumbnail7 {
    url: string;
}

export interface Icon2 {
    thumbnails: Thumbnail7[];
}

export interface CallToAction {
    simpleText: string;
}

export interface Dismiss {
    simpleText: string;
}

export interface Run8 {
    text: string;
}

export interface ButtonText2 {
    runs: Run8[];
}

export interface Run9 {
    text: string;
}

export interface SubscribedButtonText2 {
    runs: Run9[];
}

export interface Run10 {
    text: string;
}

export interface UnsubscribedButtonText2 {
    runs: Run10[];
}

export interface Run11 {
    text: string;
}

export interface UnsubscribeButtonText2 {
    runs: Run11[];
}

export interface WebCommandMetadata10 {
    sendPost: boolean;
    apiUrl: string;
}

export interface CommandMetadata10 {
    webCommandMetadata: WebCommandMetadata10;
}

export interface SubscribeEndpoint3 {
    channelIds: string[];
    params: string;
}

export interface Run12 {
    text: string;
}

export interface DialogMessage2 {
    runs: Run12[];
}

export interface Run13 {
    text: string;
}

export interface Text4 {
    runs: Run13[];
}

export interface WebCommandMetadata11 {
    sendPost: boolean;
    apiUrl: string;
}

export interface CommandMetadata11 {
    webCommandMetadata: WebCommandMetadata11;
}

export interface UnsubscribeEndpoint3 {
    channelIds: string[];
    params: string;
}

export interface ServiceEndpoint5 {
    clickTrackingParams: string;
    commandMetadata: CommandMetadata11;
    unsubscribeEndpoint: UnsubscribeEndpoint3;
}

export interface Accessibility5 {
    label: string;
}

export interface ButtonRenderer4 {
    style: string;
    size: string;
    isDisabled: boolean;
    text: Text4;
    serviceEndpoint: ServiceEndpoint5;
    accessibility: Accessibility5;
    trackingParams: string;
}

export interface ConfirmButton2 {
    buttonRenderer: ButtonRenderer4;
}

export interface Run14 {
    text: string;
}

export interface Text5 {
    runs: Run14[];
}

export interface Accessibility6 {
    label: string;
}

export interface ButtonRenderer5 {
    style: string;
    size: string;
    isDisabled: boolean;
    text: Text5;
    accessibility: Accessibility6;
    trackingParams: string;
}

export interface CancelButton2 {
    buttonRenderer: ButtonRenderer5;
}

export interface ConfirmDialogRenderer2 {
    trackingParams: string;
    dialogMessages: DialogMessage2[];
    confirmButton: ConfirmButton2;
    cancelButton: CancelButton2;
    primaryIsCancel: boolean;
}

export interface Popup2 {
    confirmDialogRenderer: ConfirmDialogRenderer2;
}

export interface OpenPopupAction2 {
    popup: Popup2;
    popupType: string;
}

export interface Action4 {
    clickTrackingParams: string;
    openPopupAction: OpenPopupAction2;
}

export interface SignalServiceEndpoint2 {
    signal: string;
    actions: Action4[];
}

export interface ServiceEndpoint4 {
    clickTrackingParams: string;
    commandMetadata: CommandMetadata10;
    subscribeEndpoint: SubscribeEndpoint3;
    signalServiceEndpoint: SignalServiceEndpoint2;
}

export interface AccessibilityData5 {
    label: string;
}

export interface SubscribeAccessibility2 {
    accessibilityData: AccessibilityData5;
}

export interface AccessibilityData6 {
    label: string;
}

export interface UnsubscribeAccessibility2 {
    accessibilityData: AccessibilityData6;
}

export interface SubscribeButtonRenderer2 {
    buttonText: ButtonText2;
    subscribed: boolean;
    enabled: boolean;
    type: string;
    channelId: string;
    showPreferences: boolean;
    subscribedButtonText: SubscribedButtonText2;
    unsubscribedButtonText: UnsubscribedButtonText2;
    trackingParams: string;
    unsubscribeButtonText: UnsubscribeButtonText2;
    serviceEndpoints: ServiceEndpoint4[];
    subscribeAccessibility: SubscribeAccessibility2;
    unsubscribeAccessibility: UnsubscribeAccessibility2;
}

export interface HovercardButton {
    subscribeButtonRenderer: SubscribeButtonRenderer2;
}

export interface PlaylistLength {
    simpleText: string;
}

export interface EndscreenElementRenderer {
    style: string;
    image: Image;
    left: number;
    width: number;
    top: number;
    aspectRatio: number;
    startMs: string;
    endMs: string;
    title: Title2;
    metadata: Metadata;
    endpoint: Endpoint;
    trackingParams: string;
    id: string;
    thumbnailOverlays: ThumbnailOverlay[];
    icon: Icon2;
    callToAction: CallToAction;
    dismiss: Dismiss;
    hovercardButton: HovercardButton;
    isSubscribe?: boolean;
    playlistLength: PlaylistLength;
}

export interface Element {
    endscreenElementRenderer: EndscreenElementRenderer;
}

export interface EndscreenRenderer {
    elements: Element[];
    startMs: string;
    trackingParams: string;
}

export interface Endscreen {
    endscreenRenderer: EndscreenRenderer;
}

export interface Timestamp {
    seconds: string;
    nanos: number;
}

export interface EntityBatchUpdate {
    mutations: any[];
    timestamp: Timestamp;
}

export interface FrameworkUpdates {
    entityBatchUpdate: EntityBatchUpdate;
}

export interface VideoInfo {
    responseContext: ResponseContext;
    playabilityStatus: PlayabilityStatus;
    streamingData: StreamingData;
    playerAds: PlayerAd[];
    playbackTracking: PlaybackTracking;
    captions: Captions;
    videoDetails: VideoDetails;
    annotations: Annotation[];
    playerConfig: PlayerConfig;
    storyboards: Storyboards;
    microformat: Microformat;
    cards: Cards;
    trackingParams: string;
    attestation: Attestation;
    endscreen: Endscreen;
    frameworkUpdates: FrameworkUpdates;
}

