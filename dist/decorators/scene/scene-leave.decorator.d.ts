export declare const SceneLeave: (...args: [] | ["callback_query"] | ["channel_post"] | ["chat_member"] | ["chosen_inline_result"] | ["edited_channel_post"] | ["message_reaction"] | ["message_reaction_count"] | ["edited_message"] | ["inline_query"] | ["message"] | ["my_chat_member"] | ["pre_checkout_query"] | ["poll_answer"] | ["poll"] | ["shipping_query"] | ["chat_join_request"] | ["chat_boost"] | ["removed_chat_boost"] | ["text"] | ["forward_date"] | ["new_chat_members"] | ["left_chat_member"] | ["new_chat_title"] | ["new_chat_photo"] | ["delete_chat_photo"] | ["group_chat_created"] | ["supergroup_chat_created"] | ["channel_chat_created"] | ["message_auto_delete_timer_changed"] | ["migrate_to_chat_id"] | ["migrate_from_chat_id"] | ["pinned_message"] | ["invoice"] | ["successful_payment"] | ["users_shared"] | ["chat_shared"] | ["connected_website"] | ["write_access_allowed"] | ["passport_data"] | ["proximity_alert_triggered"] | ["boost_added"] | ["forum_topic_created"] | ["forum_topic_edited"] | ["forum_topic_closed"] | ["forum_topic_reopened"] | ["general_forum_topic_hidden"] | ["general_forum_topic_unhidden"] | ["giveaway_created"] | ["giveaway"] | ["giveaway_winners"] | ["giveaway_completed"] | ["video_chat_scheduled"] | ["video_chat_started"] | ["video_chat_ended"] | ["video_chat_participants_invited"] | ["web_app_data"] | ["animation"] | ["document"] | ["has_media_spoiler"] | ["audio"] | ["contact"] | ["dice"] | ["game"] | ["location"] | ["photo"] | ["sticker"] | ["story"] | ["venue"] | ["video"] | ["video_note"] | ["voice"] | [("callback_query" | "channel_post" | "chat_member" | "chosen_inline_result" | "edited_channel_post" | "message_reaction" | "message_reaction_count" | "edited_message" | "inline_query" | "message" | "my_chat_member" | "pre_checkout_query" | "poll_answer" | "poll" | "shipping_query" | "chat_join_request" | "chat_boost" | "removed_chat_boost" | "text" | "forward_date" | "new_chat_members" | "left_chat_member" | "new_chat_title" | "new_chat_photo" | "delete_chat_photo" | "group_chat_created" | "supergroup_chat_created" | "channel_chat_created" | "message_auto_delete_timer_changed" | "migrate_to_chat_id" | "migrate_from_chat_id" | "pinned_message" | "invoice" | "successful_payment" | "users_shared" | "chat_shared" | "connected_website" | "write_access_allowed" | "passport_data" | "proximity_alert_triggered" | "boost_added" | "forum_topic_created" | "forum_topic_edited" | "forum_topic_closed" | "forum_topic_reopened" | "general_forum_topic_hidden" | "general_forum_topic_unhidden" | "giveaway_created" | "giveaway" | "giveaway_winners" | "giveaway_completed" | "video_chat_scheduled" | "video_chat_started" | "video_chat_ended" | "video_chat_participants_invited" | "web_app_data" | "animation" | "document" | "has_media_spoiler" | "audio" | "contact" | "dice" | "game" | "location" | "photo" | "sticker" | "story" | "venue" | "video" | "video_note" | "voice")[]] | [string] | [RegExp] | [(value: string, ctx: import("telegraf").NarrowedContext<never, import("@telegraf/types").Update.CallbackQueryUpdate<import("@telegraf/types").CallbackQuery>>) => RegExpExecArray] | [(string | RegExp | ((value: string, ctx: import("telegraf").NarrowedContext<never, import("@telegraf/types").Update.CallbackQueryUpdate<import("@telegraf/types").CallbackQuery>>) => RegExpExecArray))[]] | [string[]] | [(value: string, ctx: import("telegraf").NarrowedContext<never, {
    message: import("@telegraf/types").Update.New & import("@telegraf/types").Update.NonChannel & import("@telegraf/types").Message.TextMessage;
    update_id: number;
}>) => RegExpExecArray] | [(string | RegExp | ((value: string, ctx: import("telegraf").NarrowedContext<never, {
    message: import("@telegraf/types").Update.New & import("@telegraf/types").Update.NonChannel & import("@telegraf/types").Message.TextMessage;
    update_id: number;
}>) => RegExpExecArray))[]] | [(value: string, ctx: import("telegraf").NarrowedContext<never, import("@telegraf/types").Update.InlineQueryUpdate>) => RegExpExecArray] | [(string | RegExp | ((value: string, ctx: import("telegraf").NarrowedContext<never, import("@telegraf/types").Update.InlineQueryUpdate>) => RegExpExecArray))[]] | [(value: string, ctx: never) => RegExpExecArray] | [(string | RegExp | ((value: string, ctx: never) => RegExpExecArray))[]] | [import("telegraf/typings/composer").Predicate<never>] | [(update: import("@telegraf/types").Update) => update is import("@telegraf/types").Update] | ["👍"] | ["👎"] | ["❤"] | ["🔥"] | ["🥰"] | ["👏"] | ["😁"] | ["🤔"] | ["🤯"] | ["😱"] | ["🤬"] | ["😢"] | ["🎉"] | ["🤩"] | ["🤮"] | ["💩"] | ["🙏"] | ["👌"] | ["🕊"] | ["🤡"] | ["🥱"] | ["🥴"] | ["😍"] | ["🐳"] | ["❤‍🔥"] | ["🌚"] | ["🌭"] | ["💯"] | ["🤣"] | ["⚡"] | ["🍌"] | ["🏆"] | ["💔"] | ["🤨"] | ["😐"] | ["🍓"] | ["🍾"] | ["💋"] | ["🖕"] | ["😈"] | ["😴"] | ["😭"] | ["🤓"] | ["👻"] | ["👨‍💻"] | ["👀"] | ["🎃"] | ["🙈"] | ["😇"] | ["😨"] | ["🤝"] | ["✍"] | ["🤗"] | ["🫡"] | ["🎅"] | ["🎄"] | ["☃"] | ["💅"] | ["🤪"] | ["🗿"] | ["🆒"] | ["💘"] | ["🙉"] | ["🦄"] | ["😘"] | ["💊"] | ["🙊"] | ["😎"] | ["👾"] | ["🤷‍♂"] | ["🤷"] | ["🤷‍♀"] | ["😡"] | [`0${string}`] | [`1${string}`] | [`2${string}`] | [`3${string}`] | [`4${string}`] | [`5${string}`] | [`6${string}`] | [`7${string}`] | [`8${string}`] | [`9${string}`] | [import("@telegraf/types").ReactionTypeEmoji & {
    readonly custom_emoji_id?: never;
}] | [import("@telegraf/types").ReactionTypeCustomEmoji & {
    readonly emoji?: never;
}] | ["-👍"] | ["-👎"] | ["-❤"] | ["-🔥"] | ["-🥰"] | ["-👏"] | ["-😁"] | ["-🤔"] | ["-🤯"] | ["-😱"] | ["-🤬"] | ["-😢"] | ["-🎉"] | ["-🤩"] | ["-🤮"] | ["-💩"] | ["-🙏"] | ["-👌"] | ["-🕊"] | ["-🤡"] | ["-🥱"] | ["-🥴"] | ["-😍"] | ["-🐳"] | ["-❤‍🔥"] | ["-🌚"] | ["-🌭"] | ["-💯"] | ["-🤣"] | ["-⚡"] | ["-🍌"] | ["-🏆"] | ["-💔"] | ["-🤨"] | ["-😐"] | ["-🍓"] | ["-🍾"] | ["-💋"] | ["-🖕"] | ["-😈"] | ["-😴"] | ["-😭"] | ["-🤓"] | ["-👻"] | ["-👨‍💻"] | ["-👀"] | ["-🎃"] | ["-🙈"] | ["-😇"] | ["-😨"] | ["-🤝"] | ["-✍"] | ["-🤗"] | ["-🫡"] | ["-🎅"] | ["-🎄"] | ["-☃"] | ["-💅"] | ["-🤪"] | ["-🗿"] | ["-🆒"] | ["-💘"] | ["-🙉"] | ["-🦄"] | ["-😘"] | ["-💊"] | ["-🙊"] | ["-😎"] | ["-👾"] | ["-🤷‍♂"] | ["-🤷"] | ["-🤷‍♀"] | ["-😡"] | [`-0${string}`] | [`-1${string}`] | [`-2${string}`] | [`-3${string}`] | [`-4${string}`] | [`-5${string}`] | [`-6${string}`] | [`-7${string}`] | [`-8${string}`] | [`-9${string}`] | [(import("telegraf/typings/reactions").Reaction | "-👍" | "-👎" | "-❤" | "-🔥" | "-🥰" | "-👏" | "-😁" | "-🤔" | "-🤯" | "-😱" | "-🤬" | "-😢" | "-🎉" | "-🤩" | "-🤮" | "-💩" | "-🙏" | "-👌" | "-🕊" | "-🤡" | "-🥱" | "-🥴" | "-😍" | "-🐳" | "-❤‍🔥" | "-🌚" | "-🌭" | "-💯" | "-🤣" | "-⚡" | "-🍌" | "-🏆" | "-💔" | "-🤨" | "-😐" | "-🍓" | "-🍾" | "-💋" | "-🖕" | "-😈" | "-😴" | "-😭" | "-🤓" | "-👻" | "-👨‍💻" | "-👀" | "-🎃" | "-🙈" | "-😇" | "-😨" | "-🤝" | "-✍" | "-🤗" | "-🫡" | "-🎅" | "-🎄" | "-☃" | "-💅" | "-🤪" | "-🗿" | "-🆒" | "-💘" | "-🙉" | "-🦄" | "-😘" | "-💊" | "-🙊" | "-😎" | "-👾" | "-🤷‍♂" | "-🤷" | "-🤷‍♀" | "-😡" | `-0${string}` | `-1${string}` | `-2${string}` | `-3${string}` | `-4${string}` | `-5${string}` | `-6${string}` | `-7${string}` | `-8${string}` | `-9${string}`)[]]) => MethodDecorator;
