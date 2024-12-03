interface DocumentIdPageProps {
  params: Promise<{ documentId: string }>; // dynamic APIs are asynchronous
}
const DocumentIdPage = async ({ params }: DocumentIdPageProps) => {
  const { documentId } = await params;

  // ===============================================
  return <div className="">{documentId}</div>;
};

export default DocumentIdPage;
