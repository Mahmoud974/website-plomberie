import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function QuestionsReponses() {
  return (
    <div className="space-y-6 max-w-xl">
      <div className="flex items-center">
        <p className="text-yellow-500 font-bold uppercase">
          Questions & réponses
        </p>
        <div className="bg-yellow-500 h-[0.15rem] w-20 ml-3"></div>
      </div>

      <h2 className="text-3xl font-extrabold mt-4">
        Comment nous travaillons?
      </h2>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>
            Comment prévenir les problèmes de plomberie ?
          </AccordionTrigger>
          <AccordionContent>
            Pour éviter les pannes de plomberie, il est important de faire
            vérifier votre installation régulièrement. Assurez-vous que les
            tuyaux ne présentent pas de fuites, nettoyez les drains pour éviter
            les bouchons et veillez à ce que votre chauffe-eau fonctionne
            correctement.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>
            Pourquoi mon chauffe-eau ne chauffe plus ?
          </AccordionTrigger>
          <AccordionContent>
            {` Si votre chauffe-eau ne chauffe plus l'eau, cela peut être dû à un
          thermostat défectueux, un problème de résistance ou un manque de
          pression. Un professionnel pourra diagnostiquer la panne et remplacer
          les pièces défectueuses.`}
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger>
            {` Quelle est la durée de vie d'un chauffe-eau ?`}
          </AccordionTrigger>
          <AccordionContent>
            {` En moyenne, un chauffe-eau a une durée de vie de 10 à 15 ans.
          Cependant, cela dépend de son entretien, de son modèle et de la
          qualité de l'eau dans votre région. Il est conseillé de le faire
          réviser tous les 2 ans.`}
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger>
            Comment éviter que mes tuyaux ne gèlent en hiver ?
          </AccordionTrigger>
          <AccordionContent>
            {` Pour éviter le gel des tuyaux en hiver, il est important de les isoler
          correctement, surtout ceux qui sont situés dans des endroits froids
          (sous-sol, grenier). Vous pouvez aussi laisser un filet d'eau couler
          la nuit pour éviter le gel.`}
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-5">
          <AccordionTrigger>
            {`Quels sont les signes qu'un drain est bouché ?`}
          </AccordionTrigger>
          <AccordionContent>
            {` Si l'eau s'écoule lentement dans vos éviers, douches ou toilettes, ou
          si vous remarquez une mauvaise odeur qui persiste, il est probable que
          votre drain soit obstrué. Dans ce cas, il est préférable de faire
          intervenir un plombier pour un débouchage.`}
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-6">
          <AccordionTrigger>
            {`Pourquoi l'eau de mon évier a-t-elle une mauvaise odeur ?`}
          </AccordionTrigger>
          <AccordionContent>
            {`Une mauvaise odeur provenant de l'évier peut être causée par des
          résidus alimentaires ou des graisses qui se sont accumulés dans les
          canalisations. Un nettoyage régulier des tuyaux et l'utilisation de
          produits spécifiques peuvent aider à éliminer ces mauvaises odeurs.`}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
